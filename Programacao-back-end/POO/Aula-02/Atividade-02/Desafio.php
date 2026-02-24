<?php
abstract class Produto{
    public $nome = "pedro";
    public $preco = 12;
    public $estoque = 3;

    abstract function calcularDesconto();
}

class Eletronico extends Produto{
    function calcularDesconto(){
    $newpreco = $this->$preco-($this->preco * 0.2);
    if ($this->$estoque < 5){
        $newpreco = $newpreco + ($this->preco * 0.1);
        echo "preço de desconte de ". $newpreco. "<br>"."<br>";
    }
    else{
        echo "preço de desconto de ". $newpreco. "<br>"."<br>";
    }
    }
    }

    class Roupa extends Produto{
    function calcularDesconto(){
    $newpreco = $this->$preco-($this->preco * 0.2);
    if ($this->$estoque < 5){
        $newpreco = $newpreco + ($this->preco * 0.1);
        echo "preço de desconte de ". $newpreco. "<br>"."<br>";
    }
    else{
        echo "preço de desconto de ". $newpreco. "<br>"."<br>";
    }
    }
    }

    $Microondas = new Eletronico();
    $Microondas->nome = "microondas quentin";
    $Microondas->preco = 300;
    $Microondas->estoque= 6;

    $Microondas2 = new Eletronico();
    $Microondas2->nome = "microondas friozin";
    $Microondas2->preco = 300;
    $Microondas2->estoque= 3;

    $Shorts  = new Roupa();
    $Shorts ->nome = "Shorts radicais";
    $Shorts ->preco = 40;
    $Shorts ->estoque= 6;

    $Shorts2  = new Roupa();
    $Shorts2 ->nome = "Shorts calmos";
    $Shorts2 ->preco = 40;
    $Shorts2 ->estoque= 2;

    echo $Microondas->nome;
    echo "<br>";
    echo "o preço deste item é: ";
    echo $Microondas->preco;
    echo "<br>";
    echo "estoque de: ";
    echo $Microondas->estoque;
    echo "<br>";
    echo $Microondas->calcularDesconto();

    echo $Microondas2->nome;
    echo "<br>";
    echo "o preço deste item é: ";
    echo $Microondas2->preco;
    echo "<br>";
    echo "estoque de: ";
    echo $Microondas2->estoque;
    echo "<br>";
    echo $Microondas2->calcularDesconto();

    echo $Shorts->nome;
    echo "<br>";
    echo "o preço deste item é: ";
    echo $Shorts->preco;
    echo "<br>";
    echo "estoque de: ";
    echo $Shorts->estoque;
    echo "<br>";
    echo $Shorts->calcularDesconto();

    echo $Shorts2->nome;
    echo "<br>";
    echo "o preço deste item é: ";
    echo $Shorts2->preco;
    echo "<br>";
    echo "estoque de: ";
    echo $Shorts2->estoque;
    echo "<br>";
    echo $Shorts2->calcularDesconto();


?>