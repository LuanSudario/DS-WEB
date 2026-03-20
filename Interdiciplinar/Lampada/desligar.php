<?php

require "arduino.php";

$arduino = new Arduino("COM4");

$arduino->desligar();

echo"LED DESLIGADO";

?>