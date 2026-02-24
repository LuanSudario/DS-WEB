<?php
class Veiculo{
    public $marca = "viciv";
    public $modelo = "zuno" ;
    private $velo = "234km/h";

    public function getvelo(){
        return $this->velo;
    }
    public function  setvelo($v){
        $this->velo = $v;
    }
}
class moto extends Veiculo {
    function acelerar(){
        echo "foi acelerar a ". $this->getvelo(). "e capotou <br>";
    }
}
class carro extends Veiculo{
    function acelerar(){
        echo "foi acelerar a ". $this->getvelo(). "e ficou veloz <br>";
    }
}
//Instanciando a moto
$Moto =  new moto();
$Moto->marca = "rodas rapidinhas";
$Moto->modelo = "pequenininha";
$Moto->setvelo("2000000km/h");
//Instanciando o carro
$Carro = new carro();
$Carro->marca = "Uno";
$Carro->modelo = "Monster Truck";
$Carro->setvelo("62km/h");

echo "moto marca: ";
echo $Moto->marca. "<br>";
echo "moto modelo: ";
echo $Moto->modelo. "<br>";
$Moto->acelerar();
echo "<br><br>";

echo "Carro marca: ";
echo $Carro->marca. "<br>";
echo "moto modelo: ";
echo $Carro->modelo. "<br>";
$Carro->acelerar();
echo "<br><br>";
?>