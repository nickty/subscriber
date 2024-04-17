// subscriber.js
const mqtt = require("mqtt");
const client = mqtt.connect("ws://broker.hivemq.com:8000/mqtt");

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
  const msg = message.toString();
  //   const messageObject = JSON.parse(message.toString());
  //   console.log(`${topic}: ${messageObject.time} - ${messageObject.message}`);
  //   console.log(`Data Array: ${messageObject.arr.join(", ")}`);
  console.log(topic, msg);
});

client.on("error", function (error) {
  console.log("MQTT Client Error:", error);
});
