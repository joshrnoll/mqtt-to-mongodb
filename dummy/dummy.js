require('dotenv').config()
const mqtt_url = process.env.MQTT_URL || 'mqtt://localhost:1883'
const mqtt = require("mqtt");
const client = mqtt.connect(mqtt_url);

const data = {
  title: "Sensor Data",
  message: "Data from a device"
}

setInterval(() => {
  console.log('Sending dummy data to testtopic')
  client.publish("testtopic", JSON.stringify(data));
}, 10000)
