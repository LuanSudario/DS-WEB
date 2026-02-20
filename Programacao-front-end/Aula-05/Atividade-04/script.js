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

