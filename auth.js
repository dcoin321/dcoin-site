const ADMIN_USER = "admin";
const ADMIN_PASS = "1234";

document
.getElementById("loginForm")
.addEventListener("submit", function(e){

    e.preventDefault();

    const user = document.getElementById("username").value;
    const pass = document.getElementById("password").value;

    if(user === ADMIN_USER && pass === ADMIN_PASS){
        alert("Login realizado com sucesso!");
    } else {
        document.getElementById("error").innerText =
        "Usuário ou senha inválidos";
    }
});
