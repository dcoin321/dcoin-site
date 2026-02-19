function login(){

    const usuario = document.getElementById("usuario").value;
    const senha = document.getElementById("senha").value;
    const erro = document.getElementById("erro");

    // usuário normal
    if(usuario === "user" && senha === "1234"){
        window.location.href = "user.html";
        return;
    }

    // administrador
    if(usuario === "admin" && senha === "admin123"){
        window.location.href = "admin.html";
        return;
    }

    erro.innerText = "Usuário ou senha incorretos!";
}
