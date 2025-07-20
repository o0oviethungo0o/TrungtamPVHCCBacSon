
document.addEventListener("DOMContentLoaded", () => {
    if (localStorage.getItem("configured") === "true") {
        window.location.href = "trang-chu.html";
    }

    document.getElementById("addQuay").addEventListener("click", () => {
        const container = document.getElementById("quayContainer");
        const item = document.createElement("div");
        item.classList.add("quayItem");
        item.innerHTML = `
            <input type="text" placeholder="Tên lĩnh vực" class="linhvuc" required>
            <input type="text" placeholder="Tên công chức" class="congchuc" required>
        `;
        container.appendChild(item);
    });

    document.getElementById("configForm").addEventListener("submit", function(e) {
        e.preventDefault();
        const centerName = document.getElementById("centerName").value.trim();
        const username = document.getElementById("username").value.trim();
        const password = document.getElementById("password").value;
        const confirmPassword = document.getElementById("confirmPassword").value;

        if (password !== confirmPassword) {
            alert("Mật khẩu không khớp!");
            return;
        }

        const quays = Array.from(document.querySelectorAll(".quayItem")).map(div => ({
            linhvuc: div.querySelector(".linhvuc").value.trim(),
            congchuc: div.querySelector(".congchuc").value.trim()
        }));

        localStorage.setItem("centerName", centerName);
        localStorage.setItem("quays", JSON.stringify(quays));
        localStorage.setItem("username", username);
        localStorage.setItem("password", password);
        localStorage.setItem("configured", "true");

        alert("Lưu cấu hình thành công!");
        window.location.href = "trang-chu.html";
    });
});
