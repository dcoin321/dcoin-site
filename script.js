// LOGIN
function login(){

    let u = document.getElementById("usuario").value;
    let s = document.getElementById("senha").value;

    if(u==="admin" && s==="1234"){
        localStorage.setItem("usuario","admin");
        window.location.href="admin.html";
    }
    else if(u==="user" && s==="1234"){
        localStorage.setItem("usuario","user");
        window.location.href="dashboard.html";
    }
    else{
        alert("Login inválido");
    }
}

// LOGOUT
function logout(){
    localStorage.removeItem("usuario");
    window.location.href="index.html";
}

// PROTEÇÃO DE PÁGINA
if(location.pathname.includes("dashboard") && !localStorage.getItem("usuario")){
    window.location.href="index.html";
}

// ADMIN FUNÇÕES
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

// MOSTRAR SALDO
if(document.getElementById("saldo")){
    document.getElementById("saldo").innerText =
        "R$ " + (localStorage.getItem("saldo") || "0,00");
}
