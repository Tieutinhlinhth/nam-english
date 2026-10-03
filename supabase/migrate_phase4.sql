-- Phase 4: lưu tiến độ 4 kỹ năng Nghe/Nói/Đọc/Viết
alter table public.learning_progress
  add column if not exists skill_progress jsonb not null default '{}'::jsonb;