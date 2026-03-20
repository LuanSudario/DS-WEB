<?php

require "arduino.php";

$arduino = new Arduino("COM4");

$arduino->piscar();

echo"LED PISCANDO";

?>