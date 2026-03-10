<?php
class Fabricante{
    public $name;
    public $paisOrigem;
    public function __construct(string $name, string $paisOrigem){
        $this->name = $name;
        $this->paisOrigem = $paisOrigem;
    }
}
class Motor{
    public $potencia;
    public $fuel;
    public function __construct(string $potencia, string $fuel){
        $this->potencia = $potencia;
        $this->fuel = $fuel;
    }
}

class Car{
    public $model;
    public $ano;
    public Fabricante $Fabricante;
    public Motor $Motor;

    public function __construct(string $model, int $ano, Fabricante $Fabricante, Motor $Motor){
        $this->model = $model;
        $this->ano = $ano;
        $this->Fabricante = $Fabricante;
        $this->Motor = $Motor;
    }
    public function exibirFicha(){
        echo $this->model. " | ". $this->ano."<br>"."Fabricante :".$this->Fabricante->name." | "."Origem : ".$this->Fabricante->paisOrigem."<br>"."Motor :".$this->Motor->potencia." | "."Combustível :".$this->Motor->fuel;
    }
}

$carlos = new Fabricante("Carlos", "Acre");
$patas = new Motor("1 CV","Capim");
$cavalo = new Car("pé de meia", 2000, $carlos, $patas);
$cavalo->exibirFicha();
?>