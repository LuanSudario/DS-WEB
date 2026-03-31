
var divResposta = document.getElementById("resposta")

var inputNome   = document.getElementById("nome")

/
async function getCategorias() {
    var requisicao = await fetch("http://localhost/cafeteria-api/categorias")
    var resposta = await requisicao.json()

    console.log(resposta)

    // Gera as linhas automaticamente para todos os itens do array
    const linhas = resposta.data.map(item => `
        <tr>
            <td>${item.id}</td>
            <td>${item.nome}</td>
            <td><button onclick="deleteCategoria(${item.id})">Deletar</button></td>
        </tr>
    `).join("");
    
    console.log(linhas)
    divResposta.innerHTML = `
        <table class="sua-classe">
            <thead>
                <tr>
                    <th colspan="3" ><center>Categorias Cadastradas</center></th>
                </tr>
                <tr>
                    <th>ID</th>
                    <th>Nome</th>
                    <th>Opções</th>
                </tr>
            </thead>
            <tbody>
                ${linhas}
            </tbody>
        </table>
    `;
}



async function postCategoria() {
    var requisicao = await fetch("http://localhost/cafeteria-api/categorias", {
        method:  "POST",
        body:    JSON.stringify({ nome: inputNome.value })
    })

    var resposta = await requisicao.json()
    console.log(resposta)
    
    //Limpa o campo
    inputNome.value = ""

    getCategorias()
}


async function deleteCategoria(id) {
    var requisicao = await fetch("http://localhost/cafeteria-api/categorias/" + id, {
        method: "DELETE"
    })
 
    var resposta = await requisicao.json()
    console.log(resposta)
 
    getCategorias()
}