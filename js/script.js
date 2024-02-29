// Приверка заполнения формы
function checkForm() {
    let n1 = document.getElementById("name1").value;
    let t1 = /^[А-Я][а-я]*(-[А-Я][А-Я]*)*$/;
    if (!t1.test(n1)) {
        alert("First name is incorrect");
        return false;
    }
    let n2 = document.getElementById("name2").value;
    if (!t1.test(n2)) {
        alert("Last name is incorrect");
        return false;
    }
    let p1 = document.getElementById("pas1").value;
    if (! /\d/.test(p1)) {
        alert("Password has no digit");
        return false;
    }
    if (! /[A-Z]/.test(p1)) {
        alert("Password has no big letters");
        return false;
    }
    if (! /[a-z]/.test(p1)) {
        alert("Password has no small letters");
        return false;
    }
    let p2 = document.getElementById("pas2").value;
    if (p1 != p2) {
        alert("Passwords mismatch");
        return false;
    }
    let eMail = document.getElementById("email").value;
    let te = /^\w+([-+.']\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/;
    if (!te.test(eMail)) {
        alert("e-Mail is incorrect");
        return false;
    }
    let phone = document.getElementById("phone").value;
    if (! /^\+?\d{6,12}$/.test(phone)) {
        alert("Phone number is incorrect");
        return false;
    }

    let agree = document.getElementById("accept").value;
    if (agree != "on") {
        alert("You should accept the rules");
        return false;
    }
    return true;
}
let reset = document.querySelector('.resetUser');

regForm.addEventListener('submit', (e) => {
    e.preventDefault();
    let user = login.value,
        eMail = email.value;
    localStorage.setItem('user', user);
    localStorage.setItem('eMail', eMail);
    intro.innerHTML = 'Добро пожаловать, Послушник ' + user;
    regForm.style.display = 'none';
    reset.style.display = 'block';
    special.style.display = 'block';
    lightBox.style.display = 'block';
})

let cookieLocal = localStorage.getItem("user");

document.addEventListener("DOMContentLoaded", function () {
    if (cookieLocal) {
        intro.style.fontSize = `${30}px`;
        intro.innerHTML = 'Добро пожаловать, Послушник ' + cookieLocal;
        regForm.style.display = 'none';
        reset.style.display = 'block';
        special.style.display = 'block';
        lightBox.style.display = 'block';
    }
});

// Сброс пользователя
reset.addEventListener('click', function () {
    localStorage.clear();
    location.reload();

})

// Ссылки на др. сраницы
special.addEventListener('click', () => {
    window.open('counter.html');
})

document.querySelector('.header__burger-btn').addEventListener('click', function () {
    document.querySelector('.header').classList.toggle('open');
})

lightBox.addEventListener('click', () => {
    window.open('lightbox.html');
})