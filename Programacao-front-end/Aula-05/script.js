//====================== Eventos do Mouse =========================

var area = document.getElementById("area");
var mensagem = document.getElementById("mensagem")
//click
area.addEventListener("click", function () {
    mensagem.textContent = "Clique simples detectado!"
})
//dblclick
area.addEventListener("dblclick", function () {
    mensagem.textContent = "Clique Duplo Detectado!"
    if (area.style.background == "lightgreen") {
        area.style.background = "white";
    }
    else {
        area.style.background = "lightgreen"
    }
})
//mouseenter
area.addEventListener("mouseenter", function () {
    mensagem.textContent = "O mouse entrou na área!";
});
//mouseleave
area.addEventListener("mouseleave", function () {
    mensagem.textContent = "O mouse saiu da área!";
});
//mousemove
var coordenadas = document.getElementById("coordenadas")
area.addEventListener("mousemove", function (event) {
    coordenadas.textContent = "X:" + event.clientX + " Y:"
        + event.clientY;
});
//contextmenu
area.addEventListener("contextmenu", function (event) {
    event.preventDefault();
    alert("Botão direito clicado!");
});
//====================== Eventos do Teclado ========================
//keydown
document.addEventListener("keydown", function (event) {
    console.log("Tecla pressionada: " + event.key);
});
//keyup
document.addEventListener("keyup", function (event) {
    console.log("Tecla liberada: " + event.key);
});
//keypress
document.addEventListener("keypress", function (event) {
    console.log("Caractere digitado: " + event.key);
});

/*Acesso ao objeto event
event.key → nome da tecla
event.code → código físico do teclado
*/
/*
O que quer capturar? Comando recomendado
Nome da tecla event.key
Código simbólico event.code
Código numérico event.keyCode (antigo)
*/
document.addEventListener("keydown", function (event) {
    // Exibe a tecla pressionada
    var campo = document.getElementById("resultado");
    campo.textContent = "Tecla pressionada: " + event.key;
    // Também mostra no console
    console.log("Tecla pressionada: " + event.key);
});
//====================== Eventos do Formulário ======================
//submit
var form = document.getElementById("meuFormulario");

form.addEventListener("submit", function(event){
event.preventDefault(); //Impede o comportamento padrão do navegador
console.log("Formulário enviado!");
});
//change
var selectCurso = document.getElementById("curso");

selectCurso.addEventListener("change", function(){
console.log("Curso selecionado: " + selectCurso.value)
});

//input
var nome = document.getElementById("nome");

nome.addEventListener("input", function(){
console.log("Digitando: " + nome.value);
});

//focus

nome.addEventListener("focus", function(){
nome.style.background = "#e0f7ff";
});

//blur

nome.addEventListener("blur", function(){
nome.style.background = "white";}); 
//====================== Eventos da Janela ==========================
//load
window.addEventListener("load", function(){
console.log("Página totalmente carregada!");
});

//scroll

window.addEventListener("scroll", function(){
console.log("Scroll atual: " + window.scrollY);
});

//resize
window.addEventListener("resize", function(){
console.log("Nova largura: " + window.innerWidth);
});


//==================== Removendo Eventos =====================
/*
function teste(){
alert("clicou");
}
botao.addEventListener("click", teste());
botao.removeEventListener("click", teste());
*/
