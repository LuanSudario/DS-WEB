//pegar o ID e Cliente da URL/////////////////////////////////////////////////
const params = new URLSearchParams(window.location.search);
const id = params.get("id");
const nome = params.get("cliente")
titulo = document.getElementById("titulo");
titulo.innerHTML = `pedido #${id} -${nome}`
var Inputquantidade = document.getElementById('quant');
var Inputproduto = document.getElementById('produto_id');
var divResposta = document.getElementById('resposta')

document.addEventListener('DOMContentLoaded', () => {
    getPedidos_item();
    carregarProdutos();
});
//////////////////////////////////////////////////////////////////////////////
//////////////////////////Requirindo Produtos////////////////////////////////
async function carregarProdutos() {
    const resposta = await fetch("http://localhost/cafeteria-api/produtos");
    const json = await resposta.json();

    const select = document.getElementById("produto_id");

    select.innerHTML = "";

    json.data.forEach(produto_id => {
        const option = document.createElement("option");

        option.value = produto_id.id;
        option.textContent = produto_id.nome;

        select.appendChild(option);
    });
}

async function getPedidos_item(){
    var requisicao = await fetch(`http://localhost/cafeteria-api/pedido_itens?pedido_id=${id}`)
    var resposta = await requisicao.json()

    console.log(resposta)

    // Gera as linhas automaticamente para todos os itens do array
    const linhas = resposta.data.map(item => `
        <tr>
            <td>${item.id}</td>
            <td>${item.produto_nome}</td>
            <td>${item.quantidade}</td>
            <td>${item.preco}</td>
            <td><button onclick="deletePedido(${item.id})">Deletar</button></td>
        </tr>
    `).join("");
    
    console.log(linhas)
    divResposta.innerHTML = `
        <table class="sua-classe">
            <thead>
                <tr>
                    <th colspan="6" ><center>Produtos Cadastrados</center></th>
                </tr>
                <tr>
                    <th>ID</th>
                    <th>Produto</th>
                    <th>Quantidade</th>
                    <th>Preço total</th>
                    <th>Opções</th>
                </tr>
            </thead>
            <tbody>
                ${linhas}
            </tbody>
        </table>
    `;
}
async function postPedido(){
    const dados = {
        pedido_id: id, // O ID que você pegou da URL lá no topo
        produto_id: document.getElementById('produto_id').value,
        quantidade: document.getElementById('quant').value
    };

    const resposta = await fetch(`http://localhost/cafeteria-api/pedido_itens?pedido_id=${id}`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(dados)
    });

    const resultado = await resposta.json();
    
    if (resultado.status === "success") {
        alert("Item adicionado!");
        getPedidos_item(); // Atualiza a tabela automaticamente
    } else {
        alert("Erro: " + resultado.message);
    }
}
async function deletePedido(id) {
    var requisicao = await fetch(`http://localhost/cafeteria-api/pedido_itens?pedido_id=${id}` + id, {
        method: "DELETE"
    })
 
    var resposta = await requisicao.json()
    console.log(resposta)
 
    getPedidos_item()
}
console.log(resposta)
