// =======================
// LOGIN
// =======================
function login(){

    let u = document.getElementById("usuario").value;
    let s = document.getElementById("senha").value;

    // ADMIN
    if(u === "admin" && s === "1234"){
        localStorage.setItem("usuario","admin");
        window.location.href="admin.html";
        return;
    }

    // USUÁRIO NORMAL
    if(u === "user" && s === "1234"){
        localStorage.setItem("usuario","user");
        window.location.href="dashboard.html";
        return;
    }

    alert("Login inválido");
}

// =======================
// LOGOUT
// =======================
function logout(){
    localStorage.removeItem("usuario");
    window.location.href="index.html";
}

// =======================
// PROTEÇÃO DAS PÁGINAS
// =======================

let tipoUsuario = localStorage.getItem("usuario");

// BLOQUEIA DASHBOARD SEM LOGIN
if(location.pathname.includes("dashboard.html")){
    if(tipoUsuario !== "user"){
        window.location.href="index.html";
    }
}

// BLOQUEIA ADMIN SEM SER ADMIN
if(location.pathname.includes("admin.html")){
    if(tipoUsuario !== "admin"){
        window.location.href="index.html";
    }
}

// =======================
// FUNÇÕES ADMIN
// =======================
function ativarPlano(){
    let valor = document.getElementById("valor").value;
    localStorage.setItem("saldo", valor);
    alert("Plano ativado!");
}

function enviarAviso(){
    let msg = document.getElementById("msg").value;
    localStorage.setItem("aviso", msg);
    alert("Comunicado enviado!");
}

// =======================
// MOSTRAR SALDO USUÁRIO
// =======================
if(document.getElementById("saldo")){
    document.getElementById("saldo").innerText =
        "R$ " + (localStorage.getItem("saldo") || "0,00");
}
