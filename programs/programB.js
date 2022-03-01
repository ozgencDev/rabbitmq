const { PROVIDER_B, CONSUMER_B } = require("../config/queueName");
const { createRandomAndAddToQueue, consume } = require("../queue");
const { PointB } = require("../models/point");

const startProgramB = () => {
  createRandomAndAddToQueue(PROVIDER_B);
  consume(CONSUMER_B, (bool) => {
    if (bool) {
      PointB.create({
        programB: 1,
      });
    }
  });
};

module.exports = startProgramB;
