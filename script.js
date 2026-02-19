function login() {

    const usuario = document.getElementById("usuario").value.trim().toLowerCase();
    const senha = document.getElementById("senha").value.trim();

    // ADMIN
    if (usuario === "admin" && senha === "123") {
        window.location.href = "admin/admin.html";
        return;
    }

    // USUÁRIO
    if (usuario === "user" && senha === "123") {
        window.location.href = "user/dashboard.html";
        return;
    }

    document.getElementById("erro").innerText =
        "Usuário ou senha incorretos";
}
