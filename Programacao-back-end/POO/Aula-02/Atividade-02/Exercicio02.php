<?php
abstract class Animal{
    abstract function fazerSom();
}
class sapo extends Animal{
    function fazerSom(){
        echo "muahahahaha";
    }
}
abstract class Equino extends Animal{
    function mover(){
        echo " galopa e anda";
    }
    abstract function fazerSom();
}
class cavalo extends Equino{
    function fazerSom(){
        echo "hihihihihi e ";
        parent::mover();
    }
}
class tartaruga extends Animal{
    function fazerSom(){
        echo "aaaaaaa";
    }
}


$tartaruga = new tartaruga();
$cavalo = new cavalo();
$sapo = new sapo();

echo "A tartaruga faz: ";
echo $tartaruga->fazerSom() . "<br>";
echo "O sapo faz: ";
echo $sapo->fazerSom(). "<br>";
echo "O cavalo faz: ";
echo $cavalo->fazerSom();


?>