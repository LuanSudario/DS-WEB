<?php 
    class dono{
        public $nome;
        public $tel;

        public function __construct(string $nome, int $tel){
            $this->nome = $nome;
            $this->tel = $tel;
        }

         public function ExibirDados(){
            return "Dono: ". $this->nome. " | ". "telefone :". $this->tel;
        }
    }
    class Animal{
        public $nome;
        public $especie;
        public dono $dono;
        
        public function __construct(string $nome, string $especie, dono $dono){
            $this->nome = $nome;
            $this->especie = $especie;
            $this->dono = $dono;
        }
         public function ExibirDados(){
            return $this->nome. " | ".$this->especie."<br>";
        }
    }
    $Fafas = new dono("Fafas", 1155672401);
    // $Fafas = new dono;
    // $Fafas->tel = uish732894;
    // $Fafas->nome = "fafas";
    $antonio = new Animal("Antônio", "Cachorro",$Fafas);
    echo $antonio->ExibirDados();
    echo $Fafas->ExibirDados();
?>