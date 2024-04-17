// subscriber.js
const mqtt = require("mqtt");
const client = mqtt.connect("mqtt://localhost:1883");

client.on("connect", function () {
  client.subscribe("test/topic", function (err) {
    if (!err) {
      console.log("Subscriber connected and subscribed.");
    } else {
      console.log("Subscription error:", err);
    }
  });
});

client.on("message", function (topic, message) {
  // message is Buffer, parse it as JSON
  const messageObject = JSON.parse(message.toString());
  console.log(`${topic}: ${messageObject.time} - ${messageObject.message}`);
  console.log(`Data Array: ${messageObject.arr.join(", ")}`);
});

client.on("error", function (error) {
  console.log("MQTT Client Error:", error);
});
