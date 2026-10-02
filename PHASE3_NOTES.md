# Giai đoạn 3 đã hoàn thiện

- Đăng ký có tên hiển thị và xác nhận mật khẩu.
- Hiện/ẩn mật khẩu.
- Quên mật khẩu và luồng PASSWORD_RECOVERY.
- Đổi mật khẩu sau khi mở liên kết email.
- Trang hồ sơ cá nhân, lưu tên hiển thị.
- Thông báo lỗi đăng nhập bằng tiếng Việt.
- Đồng bộ answers, history và current_session.
- Hợp nhất dữ liệu cục bộ với dữ liệu đám mây.
- Trạng thái online/offline, đang đồng bộ, đã lưu, lỗi đồng bộ.
- Nút đồng bộ thủ công.
- Đăng xuất thiết bị hiện tại hoặc tất cả thiết bị.

Nếu nâng cấp từ Giai đoạn 2, chạy `supabase/migrate_phase3.sql`.
Nếu tạo Supabase mới, chạy `supabase/setup.sql`.
