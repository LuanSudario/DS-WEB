<?php
class Pessoa
{
    public $nome ="al";
    public $idade = "algum";
    function calcularBonus(){
        echo $this->nome;
        echo $this->idade;
    }
}
class Funcionario extends Pessoa
{
    protected $salario = 100;

    public function setSalario($novoSalario){
        $this->salario = $novoSalario;
    }
    function calcularBonus(){
         
}
}
class Desenvolvedor extends Funcionario
{
    function calcularBonus()
    {
       $newsalario = ($this->salario * 0.1)+$this->salario;
       echo "Funcionário ". $this->nome. " idade: ". $this->idade. "<br>";
        echo "sálario vigente: ". $this->salario . "<br>";
       echo "o cálculo do bônus de salário desse Desenvolvedor é: ". $newsalario . "<br><br>";
    }
}
class Gerente extends Funcionario
{
    function calcularBonus()
    {
    $newsalario = ($this->salario * 0.2)+$this->salario;
        echo "Funcionário ". $this->nome. " idade: ". $this->idade. "<br>";
        echo "sálario vigente: ". $this->salario . "<br>";
       echo "o cálculo do bônus de salário desse Gerente é: ". $newsalario . "<br>";
    }
}
//Instanciando um novo desenvolvedor
$pedro = new Desenvolvedor();
$pedro->setSalario(2000);
$pedro->nome = "pedro";
$pedro->idade = 21;
$pedro->calcularBonus();
//instanciando um novo gerente
$julio = new Gerente();
$julio->setSalario(3000);
$julio->nome = "julio";
$julio->idade = 31;
$julio->calcularBonus();
?>