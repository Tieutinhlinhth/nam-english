# Nam English Online

## Chạy trên máy

```bash
npm install
npm run dev
```

## Kết nối Supabase

1. Tạo project Supabase.
2. Chạy `supabase/setup.sql` trong SQL Editor.
3. Đổi `.env.example` thành `.env.local`.
4. Điền Project URL và Publishable Key.
5. Khởi động lại `npm run dev`.

## Build

```bash
npm run build
npm run preview
```

## Vercel

Đưa thư mục lên GitHub, import repository vào Vercel, rồi thêm hai environment variables:

- `VITE_SUPABASE_URL`
- `VITE_SUPABASE_PUBLISHABLE_KEY`
