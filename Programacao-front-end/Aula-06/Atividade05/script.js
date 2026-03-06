//variável que ira definir se o formulário pode ser enviado ou não
var Enviarform = false;

//colocando o formulário em uma variável
form = document.getElementById('form');

//colocando todos os campos em uma variável array
const campos = document.querySelectorAll('.Jesus');
console.log (campos[2])

//colocando todos os spans em uma variável array
const spans = document.querySelectorAll('.pai');


//Definindo a estilização de erro
function setError(index) {
    campos[index].style.border = "2px solid #e63636";

}
function removeError(index) {
    campos[index].style.border = "";
}

//impedindo o envio do formulário de maneira padrão
form.addEventListener("submit", (e) => {
    e.preventDefault();
})

    //Validação do nome
    var nome = false;
    function Namevalidate(){
    
    let valor = campos[0].value.trim();
    if(campos[0].value.length < 3){
        spans[0].innerHTML = "o nome precisa ter pelo menos 3 caractéres";
        setError(0);
        nome = false;
    }
    else if(campos[0].value.length > 100){
        spans[0].innerHTML = "o nome ultrapassou o limite de 100 caractéres";
        setError(0);
        nome = false;
    }
        else if(!/^[\p{L}\s]+$/u.test(valor)){
        spans[0].innerHTML = "o nome não pode conter números ou caracteres especiais";
        setError(0);
        nome = false;
    }
    else{   
        spans[0].innerHTML = "";
        nome = true;
        removeError(0);

    }
}

    //Validação do Email
    var email = false;
    function Emailvalidate(){
    let valor = campos[1].value.trim();
    if(!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(valor)){
        spans[1].innerHTML = "Email inválido";
        setError(1);
        email = false;
    } else {
        spans[1].innerHTML = "";
        removeError(1);
        email = true;
    }
}

    //Validação de senha
    var senha = false;
    function Passwordvalidate(){
    let valor = campos[2].value.trim();
    let regex = /(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*])/;

    if(campos[2].value.length < 8){
        spans[2].innerHTML = "Uma senha forte precisa de 8 caractéres ou mais";
        setError(2);
    }
    else if(!regex.test(valor)){
        spans[2].innerHTML = "Uma senha forte necessita de um caractér maiusculo, um minúsculo e pelo menos um caractér especial";
        setError(2);
    }
    else{
        senha = true;
        removeError(2)
        spans[2].innerHTML = "";
    }
    }

    //comparação das duas senhas
    var senhaiso = false;
    function Passwordvalidateiso(){
    if(campos[2].value == campos[3].value){
        removeError(2)
        spans[2].innerHTML = "";
        senhaiso = true
    }
    else{
        setError(2);
        spans[2].innerHTML = "As senhas devem ser idênticas";
        senhaiso = false;
    }
    }

    //Validação de CPF
    var cpfValido = false;
    function CPFvalidate(){
    let cpf = campos[4].value.replace(/\D/g, ''); // pega valor do CPF
    let span = spans[3]; // índice correto do span do CPF
    setError(4);

    // 1️⃣ Tamanho correto
    if(cpf.length !== 11){
        span.innerHTML = "CPF inválido";
        cpfValido = false;
        return false;
    }

    // 2️⃣ Sequência repetida
    if(/^(\d)\1{10}$/.test(cpf)){
        span.innerHTML = "CPF inválido";
        cpfValido = false;
        return false;
    }

    // 3️⃣ Primeiro dígito verificador
    let soma = 0;
    for(let i=0; i<9; i++){
        soma += parseInt(cpf[i]) * (10 - i);
    }
    let dig1 = (soma * 10) % 11;
    if(dig1 === 10) dig1 = 0;
    if(dig1 !== parseInt(cpf[9])){
        span.innerHTML = "CPF inválido";
        cpfValido = false;
        return false;
    }

    // 4️⃣ Segundo dígito verificador
    soma = 0;
    for(let i=0; i<10; i++){
        soma += parseInt(cpf[i]) * (11 - i);
    }
    let dig2 = (soma * 10) % 11;
    if(dig2 === 10) dig2 = 0;
    if(dig2 !== parseInt(cpf[10])){
        span.innerHTML = "CPF inválido";
        cpfValido = false;
        return false;
    }

    // 5️⃣ CPF válido
    span.innerHTML = "";
    removeError(4);
    cpfValido = true;
    return true;
    }

    //Validação de Telefone
    var tel = false;
    function Telvalidate(){
        let valor = campos[5].value.trim();
        const telefoneRegex = /^(\(?\d{2}\)?\s?)?(\d{4,5}-?\d{4})$/;
        if(!telefoneRegex.test(valor)){
            setError[5];
            spans[4].innerHTML = "Telefone inválido";
            tel = false;
        }
        else{
            spans[4].innerHTML = "";
            removeError[5];
            tel = true
        }
    }

    //Validação de CEP
    cep = false;
    function CEPvalidate(){
             let valor = campos[6].value.trim(); // seu input de CEP
             const cepRegex = /^\d{5}-\d{3}$/;

    if(!cepRegex.test(valor)){
        spans[5].innerHTML = "CEP inválido";
        setError(6);
        cep = false;
    } else {
        spans[5].innerHTML = "";
        removeError(6);
        cep = true;
    }
}

    //Validação de data
    var data = false;
    function Datevalidate(){
        let valor = campos[7].value.trim();
        const dataRegex = /^(0[1-9]|[12][0-9]|3[01])\/(0[1-9]|1[0-2])\/\d{4}$/;
    if(!dataRegex.test(valor)){
        spans[6].innerHTML = "Data inválida. Use DD/MM/AAAA";
        setError(7);
        data = false;
    } else {
        spans[6].innerHTML = "";
        removeError(7);
        data = true;
    }
}

    //Validação de Dinero
    var dinero = false;
    function Dinerovalidate(){
        const DineroRegex = /^\d{1,3}(\.\d{3})*(,\d{2})?$|^\d+(,\d{2})?$/;
        let valor = campos[8].value.trim()
        if(!DineroRegex.test(valor)){
            spans[7].innerHTML = "Dinero inválido";
            setError[8];
            dinero = false;
        }
        else{
            spans[7].innerHTML = "";
            removeError[8];
            dinero = true;
        }
    }

    //Validação URL
    var url = false;
    function URLvalidate(){
        const urlRegex = /^(https?:\/\/)?([\w-]+\.)+[\w-]+(\/[\w\-._~:/?#[\]@!$&'()*+,;=]*)?$/;
        let valor = campos[9].value.trim();
        if (!urlRegex.test(valor)){
            spans[8].innerHTML = "URL inválido";
            setError[9];
            url = false;
        }
        else{
            spans[8].innerHTML = "";
            removeError[9];
            url = true;
        }
    }

    //Validação de cartão de crédito
    var card = false;
    function Cardvalidate(){
        
    const regexVisa = /^4[0-9]{12}(?:[0-9]{3})?$/;
    const regexMaster = /^5[1-5][0-9]{14}$/;
    const regexAmex = /^3[47][0-9]{13}$/;
    const regexElo = /^(4011|4312|4389|4514|4576|5041|5066|5067|5090|6362|6363|6500|6516|6550)[0-9]{10,12}$/;
    }
    
