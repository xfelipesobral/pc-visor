String json;

void setup() {
  // Abre serial
  Serial.begin(9600);
}

void loop() {
    json = Serial.readString(); // read the incoming data as string
    Serial.println(json);
}
