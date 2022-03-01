var open = require("amqplib").connect("amqp://localhost");
const guessNum = require("../../utils/guess");

module.exports = function rabbCons(queueName, cb) {
  open
    .then(function (conn) {
      return conn.createChannel();
    })
    .then(function (ch) {
      return ch.assertQueue(queueName).then(function (ok) {
        return ch.consume(queueName, async function (msg) {
          const bool = guessNum(msg.content.toString());
          console.log(bool, queueName == "programA" ? "programB" : "programA");
          cb(bool);
          ch.ack(msg);
        });
      });
    })
    .catch(console.warn);
};
