    function cadastro(){
        let Treco = document.createElement("li");
        let name = document.getElementById("name").value;
        let email = document.getElementById("email").value;
        let rm = document.getElementById("rm").value;
        let tele = document.getElementById("tele").value;
        let turma = document.getElementById("turma").value;

        Treco.innerHTML = name + "<br>" + email + "<br>" + rm + "<br>" + tele + "<br>" + turma; 
        document.getElementById("NewPessoa").appendChild(Treco);
        NewPessoa.appendChild(Treco)

          let botaoRemover = document.createElement("button");
        botaoRemover.textContent = "Remover Aluno";
        
        botaoRemover.onclick = function() {
        Treco.remove();
        }
        
        Treco.appendChild(botaoRemover);
        document.getElementById("NewPessoa").appendChild(Treco);
    }



       