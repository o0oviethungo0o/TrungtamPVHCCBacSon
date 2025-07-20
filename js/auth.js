// auth.js
const taiKhoanDung = {
  username: "admin",
  password: "123456" // bạn có thể đổi giá trị này rồi upload lại lên host
};

function dangNhap() {
  const u = document.getElementById("username").value.trim();
  const p = document.getElementById("password").value.trim();
  if (u === taiKhoanDung.username && p === taiKhoanDung.password) {
    localStorage.setItem("authenticated", "true");
    window.location.href = "trang-chu.html";
  } else {
    alert("Sai tài khoản hoặc mật khẩu!");
  }
}
