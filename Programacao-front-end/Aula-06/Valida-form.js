const form = document.getElementById('form');
const campos = document.querySelectorAll('.required');
const Emailregex = /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/gi;


function setError(index){
    campos[index].style.border = "2px solid #e63636";
}
function removeError(index){
    campos[index].style.border = "";
}
function NameValidate() {
    if (campos[0].value.lenght < 3) {
        console.log('Nome deve possuir 3 caratéres ou mais');
        setError(0);
    }
    else {
        console.log('Nome Valido');
        removeError(0)

    }
}
function emailValidate(){
    if (Emailregex.test(campos[1].value)){
        console.log('Email Validado');
        removeError(1);
    }
    else{
        console.log('Email Invalido');
        setError(1);
    }
}