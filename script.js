function login() {

    const usuario = document.getElementById("usuario").value;
    const senha = document.getElementById("senha").value;

    // ADMIN
    if(usuario === "admin" && senha === "123") {
        window.location.href = "admin/admin.html";
        return;
    }

    // USUÁRIO NORMAL
    if(usuario === "user" && senha === "123") {
        window.location.href = "user/dashboard.html";
        return;
    }

    document.getElementById("erro").innerText =
        "Usuário ou senha incorretos";
}
