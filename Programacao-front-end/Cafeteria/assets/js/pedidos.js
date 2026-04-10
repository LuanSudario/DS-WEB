
var divResposta = document.getElementById("resposta")

var inputCliente   = document.getElementById("cliente")
var inputTotal  = document.getElementById("total")


async function getPedidos() {
    var requisicao = await fetch("http://localhost/cafeteria-api/pedidos")
    var resposta = await requisicao.json()

    console.log(resposta)

    // Gera as linhas automaticamente para todos os itens do array
    const linhas = resposta.data.map(item => `
        <tr>
            <td>${item.id}</td>
            <td>${item.cliente}</td>
            <td>${item.total}</td>
            <td>${item.criado_em}</td>
            <td><a href="pedidos_item.html?id=${item.id}&cliente=${item.cliente}">Visualizar</a></td>
            <td><button onclick="deletePedido(${item.id})">Deletar</button></td>
        </tr>
    `).join("");
    
    console.log(linhas)
    divResposta.innerHTML = `
        <table class="sua-classe">
            <thead>
                <tr>
                    <th colspan="6" ><center>Pedidos Cadastradas</center></th>
                </tr>
                <tr>
                    <th>ID</th>
                    <th>Cliente</th>
                    <th>Valor</th>
                    <th>Criado em</th>
                    <th colspan ="2">Opções</th>
                </tr>
            </thead>
            <tbody>
                ${linhas}
            </tbody>
        </table>
    `;
}
getPedidos();



async function postPedido() {
    var requisicao = await fetch("http://localhost/cafeteria-api/pedidos", {
        method:  "POST",
        body:    JSON.stringify(
        {
            cliente: inputCliente.value,
            total: inputTotal.value
         })
    })

    var resposta = await requisicao.json()
    console.log(resposta)
    
    //Limpa o campo
    inputCliente.value = ""
    inputTotal.value = ""

    getPedidos()
}


async function deletePedido(id) {
    var requisicao = await fetch("http://localhost/cafeteria-api/pedidos/" + id, {
        method: "DELETE"
    })
 
    var resposta = await requisicao.json()
    console.log(resposta)
 
    getPedidos()
}