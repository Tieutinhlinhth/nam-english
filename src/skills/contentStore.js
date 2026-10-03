import { useEffect, useState } from 'react'
import { DEFAULT_CONTENT } from './data'

let cache = null
const listeners = new Set()

export const getContent = () => cache || DEFAULT_CONTENT

export const setContent = (data) => {
  cache = data
  try { localStorage.setItem('eg-content', JSON.stringify(data)) } catch {}
  listeners.forEach(l => l())
}

export const clearContent = () => {
  cache = null
  try { localStorage.removeItem('eg-content') } catch {}
  listeners.forEach(l => l())
}

export const useContent = () => {
  const [, force] = useState(0)
  useEffect(() => {
    const l = () => force(x => x + 1)
    listeners.add(l)
    return () => { listeners.delete(l) }
  }, [])
  return cache || DEFAULT_CONTENT
}

export async function loadContentFromSupabase(supabase) {
  if (!supabase) return null
  const { data, error } = await supabase
    .from('content_store')
    .select('data')
    .eq('id', 'active')
    .maybeSingle()
  if (error) throw error
  return data?.data || null
}

export async function publishContentToSupabase(supabase, user, content) {
  if (!supabase) throw new Error('Chưa kết nối Supabase')
  const { error } = await supabase
    .from('content_store')
    .upsert({
      id: 'active',
      data: content,
      updated_by: user?.id || null,
      updated_at: new Date().toISOString()
    }, { onConflict: 'id' })
  if (error) throw error
}