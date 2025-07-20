// auth.js (mã đã mã hoá)
const encodedUser = "dmlldGh1bmc=";
const encodedPass = "Y2hpZW50aGFu";

function dangNhap() {
  const u = document.getElementById("username").value.trim();
  const p = document.getElementById("password").value.trim();
  if (btoa(u) === encodedUser && btoa(p) === encodedPass) {
    localStorage.setItem("authenticated", "true");
    window.location.href = "trang-chu.html";
  } else {
    alert("Sai tài khoản hoặc mật khẩu!");
  }
}