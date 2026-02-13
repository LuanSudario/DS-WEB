function cadastro(){
    let NewPessoa = document.createElement("li");
    let name = document.getElementById("email").value;
    let email = document.getElementById("name").value;
    let rm = document.getElementById("rm").value;
    let tele = document.getElementById("tele").value;
    let turma = document.getElementById("turma").value;

    NewPessoa.textContent = name;
}