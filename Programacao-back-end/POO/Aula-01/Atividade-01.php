<?php

class Caneta {
    public $cor; //Atributo1
    public $grossura; //atributo2
    public $tampa; //atributo3
    public $marca; //atributo4
    public $vidro; //atributo5
    public function escrever() { //Método1

        return "<br>Escrevi com a caneta de vidro".$this->vidro. "escrito";

    }
    public function desenhar(){ //método2
        return "<br>desenhei com a caneta da marca".$this->marca;
    }
    public function desmontar(){ //método3
    return "<br>você desmontou a caneta de grossura".$this->grossura;
    }
}
$Caneta_ruim = new Caneta();
$Caneta_ruim->marca = "LeoLeo";
echo $Caneta_ruim->desenhar();

$Caneta_boa = new Caneta();
$Caneta_boa->vidro = "Opaco";
echo $Caneta_boa->escrever();

$Caneta_mid = new Caneta();
$Caneta_mid->grossura = "0.5";
echo $Caneta_mid->desmontar();

class Livro {
    public $Editora;
    public $Autor;
    public $titulo;
    public $paginas;
    public $espacamento;
    public function Ler() {
        return "<br>você leu o livro da editora".$this->Editora;
    }
    public function Folhear(){
        return "<br>Você folheou o livro do autor".$this->Autor;
    }
    public function marcar(){
        return "<br>Você marcou uma página do livro".$this->titulo;
    }
}

$Livro_Fav = new Livro();
$Livro_Fav->titulo = "Temor do Sábio";
echo $Livro_Fav->marcar();

$Livro_mid = new Livro();
$Livro_mid->Editora = "Sesi-sp";
echo $Livro_mid->Ler();

$Livro_ruim = new Livro();
$Livro_ruim->Autor = "Machado de Assis";
echo $Livro_ruim->Folhear();



class Estojo{
    public $zipers;
    public $marca;
    public $modelo;
    public $peso;
    public $cor;

    public function abrir() {
        return "<br> um dos zípers do estojo de ".$this->zipers." foi fechado";
    }
    public function fechar(){
        return "<br> o estojo de cor ".$this->cor. "foi fechado";
    }
    public function arremessar(){
        return "<br> O ESTOJO DE ".$this->peso." FOI ARREMESSADO";
    }
}
$Estojo_bom = new Estojo();
$Estojo_bom->zipers = "3";
echo $Estojo_bom->abrir();

$Estojo_ruim = new Estojo();
$Estojo_ruim->cor = "vermelha";
echo $Estojo_ruim->fechar();

$Estojo_mid = new Estojo();
$Estojo_mid->peso = "1000000KG";
echo $Estojo_mid->arremessar();

class Mouse{
    public $modelo;
    public $sensibilidade;
    public $marca;
    public $conection_type;
    public $botoes;
    
    public function ligar() {
        return "<br> mouse ".$this->conection_type." foi ligado";
    }
    public function recarregar(){
        return "<br> o mouse com ".$this->botoes." botões está recarregando";
    }
    public function desconectar(){
        return "<br> mouse marca ".$this->marca." foi desconectado";
    }
}
    $Mouse_mid = new mouse();
    $Mouse_mid->botoes = "3";
    echo $Mouse_mid->recarregar();


    $Mouse_bom = new mouse();
    $Mouse_bom->conection_type = "bluetoooth";
    echo $Mouse_bom->ligar();

    $Mouse_ruim = new mouse();
    $Mouse_ruim->marca = "Dell";
    echo $Mouse_ruim->desconectar();

class Mochila{
    public $n_compartimentos;
    public $cor;
    public $material;
    public $marca;
    public $volume;

    public function guardar() {
        return "<br> Item guardado na mochila".$this->cor;
    }
    public function retirar(){
        return "<br> Item retirado na mochila de marca".$this->marca;
    }
    public function organizar(){
        return "<br> todos os ".$this->n_compartimentos." da mochila foram organizados";
    }
}

    $Mochila_mid = new Mochila();
    $Mochila_mid->cor = "azulada";
    echo $Mochila_mid->guardar();

     $Mochila_bom = new Mochila();
    $Mochila_bom->marca = "nordweg";
    echo $Mochila_bom->retirar();

     $Mochila_ruim = new Mochila();
    $Mochila_ruim->n_compartimentos = "8";
    echo $Mochila_ruim->organizar();
?>