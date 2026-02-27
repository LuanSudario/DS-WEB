var blocos = document.querySelectorAll(".bloco");
var cores = ["vermelho", "azul"];

// Estado lógico do jogo (0 = vermelho, 1 = azul)
var estado = [];

// Inicializar embaralhado
blocos.forEach(function(bloco, index){

    var valorAleatorio = Math.floor(Math.random() * 2);
    estado[index] = valorAleatorio;

    bloco.classList.add(cores[valorAleatorio]);
});
function verificarVitoria() {
    return Array.from(blocos).every(bloco => bloco.classList.contains("vermelho")) ||
           Array.from(blocos).every(bloco => bloco.classList.contains("azul"));
}
function cor0(){
    if (blocos[0].classList.contains("vermelho")){
        blocos[0].classList.remove("vermelho");
        blocos[0].classList.add("azul");
    }
    else{
        blocos[0].classList.remove("azul");
        blocos[0].classList.add("vermelho");
    }
}

function cor1(){
    if (blocos[1].classList.contains("vermelho")){
        blocos[1].classList.remove("vermelho");
        blocos[1].classList.add("azul");
    }
    else{
        blocos[1].classList.remove("azul");
        blocos[1].classList.add("vermelho");
    }
}

function cor2(){
    if (blocos[2].classList.contains("vermelho")){
        blocos[2].classList.remove("vermelho");
        blocos[2].classList.add("azul");
    }
    else{
        blocos[2].classList.remove("azul");
        blocos[2].classList.add("vermelho");
    }
}

function cor3(){
    if (blocos[3].classList.contains("vermelho")){
        blocos[3].classList.remove("vermelho");
        blocos[3].classList.add("azul");
    }
    else{
        blocos[3].classList.remove("azul");
        blocos[3].classList.add("vermelho");
    }
}

function cor4(){
    if (blocos[4].classList.contains("vermelho")){
        blocos[4].classList.remove("vermelho");
        blocos[4].classList.add("azul");
    }
    else{
        blocos[4].classList.remove("azul");
        blocos[4].classList.add("vermelho");
    }
}

function cor5(){
    if (blocos[5].classList.contains("vermelho")){
        blocos[5].classList.remove("vermelho");
        blocos[5].classList.add("azul");
    }
    else{
        blocos[5].classList.remove("azul");
        blocos[5].classList.add("vermelho");
    }
   
}


function cor6(){
    if (blocos[6].classList.contains("vermelho")){
        blocos[6].classList.remove("vermelho");
        blocos[6].classList.add("azul");
    }
    else{
        blocos[6].classList.remove("azul");
        blocos[6].classList.add("vermelho");
    }
}

function cor7(){
    if (blocos[7].classList.contains("vermelho")){
        blocos[7].classList.remove("vermelho");
        blocos[7].classList.add("azul");
    }
    else{
        blocos[7].classList.remove("azul");
        blocos[7].classList.add("vermelho");
    }
}

function cor8(){
    if (blocos[8].classList.contains("vermelho")){
        blocos[8].classList.remove("vermelho");
        blocos[8].classList.add("azul");
    }
    else{
        blocos[8].classList.remove("azul");
        blocos[8].classList.add("vermelho");
    }
}
 function swicht0(){
    cor0();
    cor1();
    cor3();
    cor4();
    if (verificarVitoria()){
        tocarCorneta();
    }
}
function swicht1(){
   cor1();
   cor0();
   cor2();
   cor3();
   cor4();
   cor5();
 if (verificarVitoria()){
        tocarCorneta();
    }  
}
function swicht2(){
    cor2();
    cor1();
    cor5();
    cor4();
    if (verificarVitoria()){
    tocarCorneta();
}

}
function swicht3(){
    cor0();
    cor1();
    cor3();
    cor4();
    cor6();
    cor7();
if (verificarVitoria()){
        tocarCorneta();
    }
}
function swicht4(){
    cor0();
    cor1();
    cor2();
    cor3();
    cor4();
    cor5();
    cor6();
    cor7();
    cor8();
if (verificarVitoria()){
        tocarCorneta();
    }
}
function swicht5(){
    cor1();
    cor2();
    cor4();
    cor5();
    cor7();
    cor8();
if (verificarVitoria()){
        tocarCorneta();
    }
}
function swicht6(){
    cor3();
    cor4();
    cor6();
    cor7();
if (verificarVitoria()){
        tocarCorneta();
    }
}
function swicht7(){
    cor3();
    cor4();
    cor5();
    cor6();
    cor7();
    cor8();
    if (verificarVitoria()){
        tocarCorneta();
    }
}
function swicht8(){
    cor4();
    cor5();
    cor7();
    cor8();
if (verificarVitoria()){
        tocarCorneta();
    }
}
function tocarCorneta() {
    let audio = document.getElementById("corneta");
    audio.play().catch(error => {
        console.log("Não foi possível tocar o som:", error);
    });
    let audio2 = document.getElementById("Aplausos")
    audio2.play();
    document.getElementById("texto").innerHTML="<h1>PARABÉNS!!!!!!!</h1>"
    soltarChuvaConfetes();

}
function soltarChuvaConfetes() {
    const confetes = document.getElementById("confetes");
    confetes.style.display = "block"; // torna visível

    let posicao = -1500; // posição inicial acima da tela
    const velocidade = 3; // pixels por frame

    const anim = setInterval(() => {
        posicao += velocidade;
        confetes.style.top = posicao + "px";

        if (posicao > window.innerHeight) {
            clearInterval(anim);
            confetes.style.display = "none"; // esconde novamente
            confetes.style.top = "-500px"; // reinicia para a próxima vez
        }
    }, 20); // atualiza a cada 20ms
}
