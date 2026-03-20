<?php

require "arduino.php";

$arduino = new Arduino("COM3");

$arduino->desligar();

echo"LED DESLIGADO";

?>