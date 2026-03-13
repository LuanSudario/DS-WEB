const delay = ms => new Promise(res => setTimeout(res, ms));

var pare = document.querySelectorAll(".pare");
var espere = document.querySelectorAll(".espere");
var vai = document.querySelectorAll(".vai");
var rodopio = false;
var rodopio2 = false;
var rodopio3 = false;


function start(){
    if (rodopio) return;
    if (rodopio2) return;
    if (rodopio3) return;
    rodopio = true;
    iniciarCiclo();
    console.log("modo médio ativado");
}
function start2(){
    if (rodopio2) return;
    if (rodopio) return;
    if (rodopio3) return;
    rodopio2 = true;
    iniciarCiclo();
    console.log("modo lento ativado");
}
function start3(){
    if (rodopio3) return;
    if (rodopio2) return;
    if (rodopio) return;
    rodopio3 = true
    iniciarCiclo();
    console.log("modo rápido ativado");
}
function parar(){   
    rodopio = false;
    rodopio2= false;
    rodopio3= false;
    pare[0].classList.remove("vermelho");
    pare[0].classList.add("cinza");
    vai[0].classList.remove("verde");
    vai[0].classList.add("cinza");
    espere[0].classList.remove("amarelo");
    espere[0].classList.add("cinza");
    console.log("parou");


}
async function iniciarCiclo(){
    while(rodopio == true){
        //vermelho para o verde
            pare[0].classList.remove("cinza");
            pare[0].classList.add("vermelho");
            await delay(15000)//15 segundos
            if (rodopio == false) break;
            pare[0].classList.remove("vermelho");
            pare[0].classList.add("cinza");
            vai[0].classList.remove("cinza");
            vai[0].classList.add("verde")
        //verde para amarelo
            await delay(15000)//15 segundos
            if (rodopio == false) break;
            vai[0].classList.remove("verde");
            vai[0].classList.add("cinza");
            espere[0].classList.remove("cinza");
            espere[0].classList.add("amarelo");
        //amarelo para vermelho
            await delay(4000)//4 segundos
            if (rodopio == false) break;
            espere[0].classList.remove("amarelo");
            espere[0].classList.add("cinza");
    }
    while (rodopio2 == true){
            //vermelho para o verde
            pare[0].classList.remove("cinza");
            pare[0].classList.add("vermelho");
            await delay(20000)//20 segundos
            if (rodopio2 == false) break;
            pare[0].classList.remove("vermelho");
            pare[0].classList.add("cinza");
            vai[0].classList.remove("cinza");
            vai[0].classList.add("verde")
        //verde para amarelo
            await delay(20000)//20 segundos
            if (rodopio2 == false) break;
            vai[0].classList.remove("verde");
            vai[0].classList.add("cinza");
            espere[0].classList.remove("cinza");
            espere[0].classList.add("amarelo");
        //amarelo para vermelho
            await delay(20000)//20 segundos
            if (rodopio2 == false) break;
            espere[0].classList.remove("amarelo");
            espere[0].classList.add("cinza");
    }
        while (rodopio3 == true){
            //vermelho para o verde
            pare[0].classList.remove("cinza");
            pare[0].classList.add("vermelho");
            await delay(10000)//10 segundos
            if (rodopio3 == false) break;
            pare[0].classList.remove("vermelho");
            pare[0].classList.add("cinza");
            vai[0].classList.remove("cinza");
            vai[0].classList.add("verde")
        //verde para amarelo
            await delay(10000)//10 segundos
            if (rodopio3 == false) break;
            vai[0].classList.remove("verde");
            vai[0].classList.add("cinza");
            espere[0].classList.remove("cinza");
            espere[0].classList.add("amarelo");
        //amarelo para vermelho
            await delay(2000)//2 segundos
            if (rodopio3 == false) break;
            espere[0].classList.remove("amarelo");
            espere[0].classList.add("cinza");
    }
}

