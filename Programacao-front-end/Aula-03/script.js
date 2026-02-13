//Criando o contador de Items
var contadorItem = 0

function add(){
//Incrementando o contador de itens
contadorItem ++
//Crio o item
let novoItem = document.createElement("li");
//Adiciono texto ao meu item
novoItem.textContent = contadorItem +" - "+ prompt("Digite o nome da tarefa");
//Atribuo um id
novoItem.setAttribute("id","contadorItem");

//Cria o botão de remover
let botaoRemover = document.createElement("button");
botaoRemover.textContent = "Remover";//adiciona  texto ao botão
botaoRemover.setAttribute("onclick","remove(${contadorItem})")//adiciona uma função


novoItem.appendChild(botaoRemover) //Adiociona o Botão ao novo item
document.getElementById("lista").appendChild(novoItem);
}


function remove(itemLista){
    var item = document.getElementById(itemLista);
    document.getElementById("lista").removeChild(item);
}