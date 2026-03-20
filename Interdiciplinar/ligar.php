<?php

require "arduino.php";

$arduino = new Arduino("COM3");

$arduino->ligar();

echo"LED LIGADO";

?>