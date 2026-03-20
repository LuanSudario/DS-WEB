<?php

require "arduino.php";

$arduino = new Arduino("COM4");

$arduino->ligar();

echo"LED LIGADO";

?>