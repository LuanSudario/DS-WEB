//Manipulando o DOM

document.getElementById("conteudo").innerHTML = "<p>Olá mundo!</p>"

//usando setAtributte  e o getAtributte
document.getElementById("foto").setAttribute("src", "pato.jpg");

console.log(document.getElementById("foto").getAttribute("src"));

//Alterando propriedades CSS
document.getElementById("conteudo").style.backgroundColor = "lightblue";
document.getElementById("foto").style.width = "500px";
//função botão
function mudaTamanho(){
    document.getElementById("foto").style.width = "1000px";
    document.getElementById("foto").setAttribute("src", "pertubador.jpg");
    document.getElementById("conteudo").innerHTML = "<h1>...</h1>"
}