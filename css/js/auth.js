function login(){

    let usuario = document.getElementById("usuario").value;
    let senha = document.getElementById("senha").value;

    // LOGIN ADMIN
    if(usuario === ADMIN_USER && senha === ADMIN_PASS){
        localStorage.setItem("tipo","admin");
        window.location.href="admin.html";
        return;
    }

    // LOGIN USUÁRIO
    let userSalvo = localStorage.getItem("user_"+usuario);
    let senhaSalva = localStorage.getItem("pass_"+usuario);

    if(userSalvo && senhaSalva === senha){
        localStorage.setItem("tipo","usuario");
        localStorage.setItem("logado",usuario);
        window.location.href="dashboard.html";
    }else{
        alert("Usuário ou senha incorretos");
    }
}
