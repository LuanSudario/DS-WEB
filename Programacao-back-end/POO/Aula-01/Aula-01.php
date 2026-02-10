<?php

class Pessoa {
    public $nome; //Atributo

    public function falar() { //Método

        return "O meu nome é ".$this->nome;

    }
}

    $Luan = new Pessoa();
    $Luan->nome= "Luan Sudario";
    echo $Luan->falar();

?>