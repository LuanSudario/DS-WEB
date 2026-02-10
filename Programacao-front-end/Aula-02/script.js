//Funções em Javascript:

function SomarNumeros(num1,num2) {
    return num1 + num2
}

let resultado = SomarNumeros(5, 10)
console.log(resultado)

resultado = SomarNumeros (50,100)

var nome = "Carlos"

function NomeProf(){
    let nome = "Bruno"
    console.log(nome)
}

function NomeProf2(){
    let nome = "Scudeler"
    console.log(nome)
}

NomeProf()
NomeProf2()

console.log(nome)

// Trabalhando com DATA e HORA
let DataAtual = new Date()
console.log(DataAtual.toISOString())

let ano = DataAtual.getFullYear();
let mes = DataAtual.getMonth();
let dia = DataAtual.getDate();
let hora = DataAtual.getHours();
let minuto = DataAtual.getMinutes();
let segundo = DataAtual.getSeconds();

console.log(`${dia}/${mes}/${ano} ${hora}:${minuto}:${segundo}`);

//========================================Outro Exemplo de Date Abaixo!!!!!=============================================================
//========================================Outro Exemplo de Date Abaixo!!!!!=============================================================
//========================================Outro Exemplo de Date Abaixo!!!!!=============================================================
//========================================Outro Exemplo de Date Abaixo!!!!!=============================================================
//========================================Outro Exemplo de Date Abaixo!!!!!=============================================================

let hoje = new Date();
let DiasParaAdicionar = 7;

//Cria uma nova data apartir da data atual
let NovaData = new Date(hoje);
NovaData.setDate(NovaData.getDate() + DiasParaAdicionar);
//toLocaleDateString Exibe a data no formato local, ou seja, Dia/Mes/Ano
console.log(NovaData.toLocaleDateString());

//Outros comandos

let data1 = new Date('2025-03-19');
let data2 = new Date('2025-03-25');

// Diferença em milissegundos
let diferencaMs = data2 - data1;
