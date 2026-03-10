<?php
    class Artista{
        public $nome;
        public $genre;  
        public function __construct(string $nome,string $genre){
            $this->nome = $nome;
            $this->genre = $genre;
        }     
    }
    class music{
        public $time;
        public $title;
        public Artista $Elow;
        public function __construct(string $time,string $title, Artista $musk){
        $this->time = $time;
        $this->title = $title;
        $this->Artista = $musk;
        }
    
    public function Exibirinfo(){
        echo "Música : ".$this->title. " | "."Duração : ".$this->time."<br>"."Músico : ".$this->Artista->nome. " | "."Gênero :".$this->Artista->genre;  ;
    }
    }

    $musk = new Artista("Elow musk","METAL,PESADO,RADICAL,SEM FREIO, legal");
    $myway = new music("4:50","grok.mp3 ia original music", $musk);
    $myway->Exibirinfo();
?>
