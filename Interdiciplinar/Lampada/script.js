const delay = ms => new Promise(res => setTimeout(res, ms));
var lampada = document.querySelectorAll(".lampada");
lampada[0].classList.add("desligado");
var piscando = false


function ligar(){
    fetch("ligar.php")
    .then(response => response.text())
    .then(data => {
          document.getElementById("estado").innerText = data;
        })
    .catch(error => console.error("Erro:", error));
    lampada[0].classList.remove("desligado");
    lampada[0].classList.add("acesso");
    piscando = false
}

function desligar(){
    fetch("desligar.php")
    .then(response => response.text())
    .then(data => {
          document.getElementById("estado").innerText = data;
        })
    .catch(error => console.error("Erro:", error));
    lampada[0].classList.remove("acesso");
    lampada[0].classList.add("desligado");
    piscando = false
    
}

function piscar(){
    piscando = true
   IniciarCiclo()
   fetch("pisca.php")
    .then(response => response.text())
    .then(data => {
          document.getElementById("estado").innerText = data;
        })
    .catch(error => console.error("Erro:", error));
}

async function IniciarCiclo(){
    while (piscando == true){
    lampada[0].classList.remove("acesso");
    lampada[0].classList.add("desligado");
    if (!piscando) break;
    await delay(200);
    lampada[0].classList.add("acesso");
    lampada[0].classList.remove("desligado");
    if (!piscando) break;
    await delay(200);
    lampada[0].classList.remove("acesso");
    lampada[0].classList.add("desligado");
    if (!piscando) break;
    await delay(200);
    lampada[0].classList.add("acesso");
    lampada[0].classList.remove("desligado");
    if (!piscando) break;
    await delay(200);
    }
}
