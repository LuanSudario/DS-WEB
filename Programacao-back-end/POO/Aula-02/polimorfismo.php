<?php
class Animal
{
    public function falar()
    {
        return "Som";
    }
    public function mover()
    {
        return "Anda";
    }
}
class Cachorro extends Animal
{
    public function falar()
    {
        return "Late";
    }
}
class Gato extends Animal
{
    public function falar()
    {
        return "Mia";
    }
}
class Passaro extends Animal
{
    public function falar()
    {
        return "Canta";
    }
    public function mover()
    {
        return "Voa e " . parent::mover();
    }
}
$pluto = new Cachorro();
echo $pluto->falar() . "<br/>";
echo $pluto->mover() . "<br/>";
echo "-------------------------<br/>";
$garfield = new Gato();
echo $garfield->falar() . "<br/>";
echo $garfield->mover() . "<br/>";
echo "-------------------------<br/>";
$Loro_jose = new Passaro();
echo $Loro_jose->falar() . "<br/>";
echo $Loro_jose->mover() . "<br/>";
