window.onload = loginLoad;

function loginLoad() {

    document
        .getElementById("myLogin")
        .addEventListener("submit", checkLogin);

}

function checkLogin(event) {

    // ป้องกันหน้าเว็บ refresh
    event.preventDefault();

    // สร้าง Array สำหรับเก็บ Users
    const users = [
        {
            username: "admin",
            password: "123456"
        }
    ];

    // ดึงข้อมูลจาก localStorage
    const storedUsername =
        localStorage.getItem("username");

    const storedPassword =
        localStorage.getItem("password");


    // ถ้ามีข้อมูลจาก Register
    // เพิ่มเข้าไปใน Array

    if (storedUsername && storedPassword) {

        users.push({
            username: storedUsername,
            password: storedPassword
        });

    }

    // ตรวจสอบว่ามี User หรือไม่
    if (users.length === 0) {

        alert(
            "ไม่พบข้อมูลผู้ใช้ในระบบ กรุณาลงทะเบียนที่หน้า Register ก่อน"
        );

        window.location.href =
            "register.html";

        return false;
    }

    // ดึงข้อมูลที่กรอกจาก Login
    const username =
        document
            .getElementById("username")
            .value
            .trim();


    const password =
        document
            .getElementById("loginPassword")
            .value;

    // ตรวจสอบ Login
    let isLoginSuccess = false;


    for (let i = 0; i < users.length; i++) {

        if (
            users[i].username === username &&
            users[i].password === password
        ) {

            isLoginSuccess = true;

            break;
        }

    }

    // แสดงผล
    if (isLoginSuccess) {

        alert(
            "Login success! ยินดีต้อนรับเข้าสู่ระบบ"
        );

        return true;

    } else {

        alert(
            "Username หรือ password ไม่ถูกต้อง"
        );

        return false;
    }

}