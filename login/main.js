// Alt + Shift + F
var users = [
    { login: "dasha33", password: "12345" }, // Dasha
    { login: "Sasha_8", password: "56S" }, // Sahsa
    { login: "John1", password: "098" } // john
];

function login() {

    var loginTag = document.getElementById("login");
    var passwordTag = document.getElementById("password");
    var foundUser = false; // Знайшли користувача чи ні. true - знайшли, false - не знайшли. found(з англ.) - знайшли
    // спочатку тут false бо ми ще не починали шукати

    // шукаємо в users dasha33
    for (var i = 0; i < users.length; i++) {
        var user = users[i];


        if (user.login == loginTag.value ) { // Знайшли даного користувача в нашому масиві
            foundUser = true;
            if (user.password == passwordTag.value) {   // Якщо співпадає
                console.log("Ви успішно увійшли");
            } else {                                    // Якщо не співпадає
                console.log("Ви ввели невірний пароль");
            }
        }
    } // завершили шукати користувачів

    // перевіряємо чи знайшли
    if (!foundUser) {
        console.log("Такого користувача немає в нашій системі!");
    }
}

