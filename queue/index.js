const cron = require("node-cron");
const publisher = require("./logic/publisher");
const consumer = require("./logic/consumer");
const random = require("../utils/random");

/* queueya ekler */
const createRandomAndAddToQueue = (queueName) => {
  console.log("createRandomAndAddToQueue çalıştı");
  return cron
    .schedule("*/1 * * * * *", async () => {
      const randomNum = random();
      publisher(queueName, randomNum);
    })
    .start();
};

/* queueyu tükekir */
const consume = (queueName, cb) => {
  console.log("consume çalıştı");
  consumer(queueName, cb);
};

module.exports = {
  createRandomAndAddToQueue,
  consume,
};
