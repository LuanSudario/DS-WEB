<?php
    class Arduino{
        private $porta;
        public function __construct($porta){
            $this->porta = $porta;
        }
        private function Comando($comando){
        $cmd = "echo ". $comando . " > ".$this->porta;
        exec($cmd);
        }
    

    public function ligar(){
        $this->Comando('L');
    }
    public function desligar(){
        $this->Comando('D');
    }
    public function piscar(){
        $this->Comando('P');
    }
    }
?>