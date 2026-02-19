
// ================= LOGIN =================
function login(){

    let usuario = document.getElementById("usuario").value;
    let senha = document.getElementById("senha").value;

    if(usuario === "admin" && senha === "1234"){
        localStorage.setItem("tipo","admin");
        window.location.href="admin.html";
        return;
    }

    if(usuario === "user" && senha === "1234"){
        localStorage.setItem("tipo","user");
        window.location.href="dashboard.html";
        return;
    }

    alert("Login inválido");
}

// ================= PROTEÇÃO =================
let tipo = localStorage.getItem("tipo");

// proteger admin
if(window.location.pathname.includes("admin.html")){
    if(tipo !== "admin"){
        window.location.href="index.html";
    }
}

// proteger dashboard
if(window.location.pathname.includes("dashboard.html")){
    if(tipo !== "user"){
        window.location.href="index.html";
    }
}

// ================= LOGOUT =================
function logout(){
    localStorage.removeItem("tipo");
    window.location.href="index.html";
}

// ================= ADMIN =================
function ativarPlano(){
    let valor = document.getElementById("valor").value;
    localStorage.setItem("saldo", valor);
    alert("Investimento ativado!");
}

// ================= MOSTRAR SALDO =================
if(document.getElementById("saldo")){
    let saldo = localStorage.getItem("saldo") || "0,00";
    document.getElementById("saldo").innerText = "R$ " + saldo;
}
