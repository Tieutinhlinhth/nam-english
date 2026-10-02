# Triển khai Nam English lên Vercel

## 1. Kiểm tra trước khi đưa lên Internet

```bash
npm install
npm run verify
npm run preview
```

## 2. Chuẩn bị Supabase

- Dự án Supabase mới: chạy `supabase/setup.sql`.
- Nâng cấp từ Giai đoạn 2: chạy `supabase/migrate_phase3.sql`.
- Lấy Project URL và Publishable Key.

Tạo `.env.local` để kiểm tra trên máy:

```env
VITE_SUPABASE_URL=https://YOUR_PROJECT.supabase.co
VITE_SUPABASE_PUBLISHABLE_KEY=YOUR_PUBLISHABLE_KEY
```

## 3. Đưa mã lên GitHub

```bash
git init
git add .
git commit -m "Nam English production v4"
git branch -M main
git remote add origin https://github.com/USERNAME/nam-english.git
git push -u origin main
```

## 4. Import vào Vercel

- Add New → Project → Import repository.
- Framework: Vite.
- Build command: `npm run build`.
- Output directory: `dist`.
- Install command: `npm install`.

Thêm biến môi trường cho Production, Preview và Development:

```text
VITE_SUPABASE_URL
VITE_SUPABASE_PUBLISHABLE_KEY
```

Nhấn Deploy. Nếu thêm hoặc sửa biến sau đó, phải Redeploy.

## 5. Cấu hình Supabase Auth

Authentication → URL Configuration:

```text
Site URL: https://TEN-DU-AN.vercel.app
Redirect URL: https://TEN-DU-AN.vercel.app/**
Redirect URL local: http://localhost:5173/**
```

## 6. Kiểm tra production

- Mở `/health.json`, phải thấy status `ok`.
- Đăng ký và xác nhận email.
- Làm một bài trên máy tính, đồng bộ, đăng nhập trên điện thoại.
- Kiểm tra quên mật khẩu quay về đúng URL production.
- Cài ứng dụng từ trình duyệt nếu trình duyệt hỗ trợ PWA.
- Kiểm tra ngoại tuyến: trang đã mở trước đó vẫn khởi động được; dữ liệu học lưu cục bộ và đồng bộ lại khi có mạng.

## 7. Tên miền riêng (không bắt buộc)

Vercel Project → Settings → Domains → Add Domain. Sau khi DNS hoạt động, đổi Supabase Site URL và Redirect URLs sang tên miền chính thức.
