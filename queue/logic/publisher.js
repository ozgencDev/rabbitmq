var open = require("amqplib").connect("amqp://localhost");

module.exports = function rabbPub(queueName, message) {
  open
    .then(function (conn) {
      return conn.createChannel();
    })
    .then(function (ch) {
      return ch.assertQueue(queueName).then(function (ok) {
        return ch.sendToQueue(queueName, Buffer.from(message.toString()));
      });
    })
    .catch(console.warn);
};
