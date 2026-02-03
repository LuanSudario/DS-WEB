<?php

class Caneta {
    public $cor; //Atributo1
    public $grossura; //atributo2
    public $tampa; //atributo3
    public $marca; //atributo4
    public $vidro; //atributo5
    public function escrever() { //Método1

        return "O meu nome é ".$this->nome. "escrito";

    }
    public function desenhar(){ //método2
        return "desenhado";
    }
    public function desmontar(){ //método3
    return "desmontado";
    }
}

class Livro {
    public $Editora;
    public $Autor;
    public $titulo;
    public $paginas;
    public $espacamento;
    public function Ler() {
        return "Lido";
    }
    public function Folhear(){
        return "Folheado";
    }
    public function marcar(){
        return "Marcar"
    }
}

class Estojo{
    public $zipers;
    public $marca;
    public $modelo;
    public $peso;
    public $cor;

    public function abrir() {
        return "aberto";
    }
    public function fechar(){
        return "fechado";
    }
    public function arremessar(){
        return "ARREMESSADO";
    }
}

class Mouse{
    public $modelo;
    public $sensibilidade;
    public $marca;
    public $conection_type;
    public $botoes;
    
    public function ligar() {
        return "ligado";
    }
    public function recarregar(){
        return "recarregado";
    }
    public function desconectar(){
        return "recarregado";
    }
}

class Mochila{
    public $n_compartimentos;
    public $cor;
    public $material;
    public $marca;
    public $volume;

    public function guardar() {
        return "Item guardado";
    }
    public function retirar(){
        return "Item retirado";
    }
    public function organizar(){
        return "mochila organizada";
    }
}
?>