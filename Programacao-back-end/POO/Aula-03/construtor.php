<?php
    class Pessoa{
        public $nome;
        public $idade;

        public function __construct($novoNome,$novoIdade){
            $this->nome = $novoNome;
            $this->idade = $novoIdade;
        }

        public function ExibirDados(){
            return "O nome da pessoa é ".$this->nome." e a idade é ".$this->idade;
        }

        public function AlterarDados($novoNome,$novoIdade){
            $this->nome = $novoNome;
            $this->idade = $novoIdade;
        }
    }

    $pessoa = new Pessoa("Daniel",17);

    echo $pessoa->ExibirDados();

    $pessoa->AlterarDados("Lucas",16);

    echo "<br>";

    echo $pessoa->ExibirDados();

?>