var divResposta = document.getElementById("resposta")

// os inputs var inputNome   = document.getElementById("nome")

document.addEventListener('DOMContentLoaded', () => {
    getPlano();
    carregarCategorias();
});
document.getElementById('botaoEnviar').addEventListener('click', postPlano)

async function carregarCategorias() {
    const resposta = await fetch("http://localhost/meus-planos-api/categorias");
    const json = await resposta.json();

    const select = document.getElementById("categoria_id");

    select.innerHTML = "";

    json.data.forEach(categoria_id => {
        const option = document.createElement("option");

        option.value = categoria_id.id;
        option.textContent = categoria_id.nome;

        select.appendChild(option);
    });
}
async function getPlano() {
    var requisicao = await fetch("http://localhost/meus-planos-api/itens")
    var resposta = await requisicao.json()

    console.log(resposta)

    // Gera as linhas automaticamente para todos os itens do array
    const linhas = resposta.data.map(item => `
        <tr>
            <td>
                <input type="checkbox" class="check-feito" ${item.feito == 1 ? "checked" : ""}
                onclick="toggleFeito(${item.id}, this.checked)">
            </td>
            <td class="risco">${item.nome}</td>
            <td>${item.categoria_nome}</td>
            <td><button onclick="deletePlano(${item.id})">Deletar</button></td>
        </tr>
    `).join("");
    
    console.log(linhas)
    divResposta.innerHTML = `
        <table class="sua-classe">
            <thead>
                <tr>
                    <th colspan="6" ><center>Planos Planejados</center></th>
                </tr>
                <tr>
                    <th>Feito</th>
                    <th>Nome</th>
                    <th>Categoria</th>
                    <th>Opções</th>
                </tr>
            </thead>
            <tbody>
                ${linhas}
            </tbody>
        </table>
    `;
}

async function postPlano() {
    var inputNome = document.getElementById("nome")
    var inputcategoria_id = document.getElementById("categoria_id")
    var inputfeito = document.getElementById("feito")
    var requisicao = await fetch("http://localhost/meus-planos-api/itens", {
    headers:
    {
    "Content-Type": "application/json"
    },
    method:  "POST",
        body:JSON.stringify({
            nome: inputNome.value,
            categoria_id: inputcategoria_id.value,
            feito: inputfeito.checked
             })
    })

    var resposta = await requisicao.json()
    console.log(resposta)
    
    //Limpa o campo
    inputNome.value = ""
    inputcategoria_id.value = ""

    getPlano()
}


async function deletePlano(id) {
    var requisicao = await fetch("http://localhost/meus-planos-api/itens/" + id, {
        method: "DELETE"
    })
 
    var resposta = await requisicao.json()
    console.log(resposta)
 
    getPlano()
}


async function toggleFeito(id, checked){
    const feito = checked ? 1 : 0;
    await fetch("http://localhost/meus-planos-api/itens/" + id, {
    method: "PUT",
    headers: {
        "Content-Type": "application/json"
    },
    body: JSON.stringify({
        feito: feito
    })
});
getPlano()
}
