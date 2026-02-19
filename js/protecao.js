const logado = localStorage.getItem("logado");
const tipo = localStorage.getItem("tipo");

// bloqueia acesso sem login
if(logado !== "true"){
    window.location.href = "index.html";
}

// bloqueia usuário entrar no admin
if(window.location.pathname.includes("admin.html") && tipo !== "admin"){
    window.location.href = "dashboard.html";
}

function sair(){
    localStorage.clear();
    window.location.href = "index.html";
}
