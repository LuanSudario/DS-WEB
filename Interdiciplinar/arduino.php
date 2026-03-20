<?php
    class Arduino{
        private $porta;
        public function __construct($porta){
            $this->porta = $porta;
        }
        private function enviarComando($comando){
        $cmd = "echo ". $comando . " > ".$this->porta;
        exec($cmd);
        }
    

    public function ligar(){
        $this->enviarComando("L");
    }
    public function desligar(){
        $this->enviarComando("D");
    }
    }
?>