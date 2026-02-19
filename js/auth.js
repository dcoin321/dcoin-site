function login(){

    const usuario = document.getElementById("usuario").value;
    const senha = document.getElementById("senha").value;
    const erro = document.getElementById("erro");

    // usuários de teste
    const usuarios = [
        {user:"admin", pass:"123", tipo:"admin"},
        {user:"usuario", pass:"123", tipo:"user"}
    ];

    const encontrado = usuarios.find(
        u => u.user === usuario && u.pass === senha
    );

    if(encontrado){

        localStorage.setItem("logado", "true");
        localStorage.setItem("tipo", encontrado.tipo);

        if(encontrado.tipo === "admin"){
            window.location.href = "admin.html";
        }else{
            window.location.href = "dashboard.html";
        }

    }else{
        erro.innerText = "Usuário ou senha inválidos";
    }
}
