<?php
abstract class Animal {
public function fazerSom(){}
}
class Cachorro extends Animal {
public function fazerSom() {
echo "Au Au!";
}
}
$cachorro = new Cachorro();
$cachorro->fazerSom();
?>