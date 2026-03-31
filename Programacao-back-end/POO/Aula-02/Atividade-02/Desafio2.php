    <?php
    class Document{
        private $numero = 10;
        public function setNumero($newNumero){
            $this->numero = $newNumero;
        }
        public function getNumero(){
            return $this->numero;
        }
    }
    class CPF extends Document{
        public function validar(){
        // Remove caracteres não numéricos
        $cpf = $this->getNumero();
        $cpf = preg_replace('/[^0-9]/', '', (string)$cpf);

        // Verifica se tem 11 dígitos ou se é uma sequência repetida
        if (strlen($cpf) != 11 || preg_match('/(\d)\1{10}/', $cpf)) {
            return false;
        }

        // Calcula os dígitos verificadores para verificar a autenticidade
        for ($t = 9; $t < 11; $t++) {
            for ($d = 0, $c = 0; $c < $t; $c++) {
                $d += $cpf[$c] * (($t + 1) - $c);
            }
            $d = ((10 * $d) % 11) % 10;
            if ($cpf[$c] != $d) {
                return false;
            }
        }
        return true;

        }
    }

    $pablo = new CPF;
    $pablo->setNumero("52998224725"); 

        if($pablo->validar()){
            echo "CPF Válido";
}               else{
                    echo "CPF Inválido";
}
    ?>