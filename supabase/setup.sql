create table if not exists public.profiles (
  id uuid primary key references auth.users(id) on delete cascade,
  display_name text not null default '',
  updated_at timestamptz not null default now()
);

create table if not exists public.learning_progress (
  user_id uuid primary key references auth.users(id) on delete cascade,
  answers jsonb not null default '{}'::jsonb,
  history jsonb not null default '[]'::jsonb,
  current_session jsonb,
  updated_at timestamptz not null default now()
);

alter table public.profiles enable row level security;
alter table public.learning_progress enable row level security;

create policy "Users can view own profile" on public.profiles for select using (auth.uid() = id);
create policy "Users can insert own profile" on public.profiles for insert with check (auth.uid() = id);
create policy "Users can update own profile" on public.profiles for update using (auth.uid() = id) with check (auth.uid() = id);

create policy "Users can view own progress" on public.learning_progress for select using (auth.uid() = user_id);
create policy "Users can insert own progress" on public.learning_progress for insert with check (auth.uid() = user_id);
create policy "Users can update own progress" on public.learning_progress for update using (auth.uid() = user_id) with check (auth.uid() = user_id);
