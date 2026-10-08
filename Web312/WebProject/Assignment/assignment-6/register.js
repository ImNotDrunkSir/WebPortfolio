window.onload = pageLoad;

function pageLoad() {

    document
        .getElementById("myRegister")
        .addEventListener("submit", validateForm);

}

function validateForm(event) {

    event.preventDefault();

    const errorMsg =
        document.getElementById("errormsg");

    const form =
        document.forms["myRegister"];

    const firstname =
        form["firstname"].value.trim();

    const lastname =
        form["lastname"].value.trim();

    const gender =
        form["gender"].value;

    const bday =
        form["bday"].value;

    const email =
        form["email"].value.trim();

    const username =
        form["username"].value.trim();

    const passwords =
        form["password"];

    const password =
        passwords[0].value;

    const retypePassword =
        passwords[1].value;

    if (
        firstname === "" ||
        lastname === "" ||
        gender === "" ||
        bday === "" ||
        email === "" ||
        username === "" ||
        password === "" ||
        retypePassword === ""
    ) {

        errorMsg.innerHTML =
            "Please fill in all required fields.";

        return false;
    }

    if (password !== retypePassword) {

        errorMsg.innerHTML =
            "Password and Retype Password do not match.";

        return false;
    }

    errorMsg.innerHTML = "";

    localStorage.setItem(
        "firstname",
        firstname
    );

    localStorage.setItem(
        "lastname",
        lastname
    );

    localStorage.setItem(
        "gender",
        gender
    );

    localStorage.setItem(
        "bday",
        bday
    );

    localStorage.setItem(
        "email",
        email
    );

    localStorage.setItem(
        "username",
        username
    );

    localStorage.setItem(
        "password",
        password
    );

    alert(
        "ลงทะเบียนสำเร็จ! ระบบบันทึกข้อมูลเรียบร้อย กำลังไปที่หน้า Login"
    );

    window.location.href = "login.html";

}