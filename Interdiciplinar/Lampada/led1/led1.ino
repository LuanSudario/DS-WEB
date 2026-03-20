const int led = 13;
int status = 'D'; // D: desligado, L: ligado, P: piscando

void setup() {
  pinMode(led, OUTPUT);
  Serial.begin(9600);
}

void loop() {
  if (Serial.available() > 0) {
    char comando = Serial.read();
    if (comando == 'D') {
      status = 'D';
    }
    if (comando == 'L') {
      status = 'L';
    }

    if (comando == 'P') {
      status = 'P';
    } 
  }

  if (status == 'D') {
    digitalWrite(led, LOW);
  } else if (status == 'L') {
    digitalWrite(led, HIGH);
  } else if (status == 'P') {
    digitalWrite(led, HIGH);
    delay(200);
    digitalWrite(led, LOW);
    delay(200);
  }
}
