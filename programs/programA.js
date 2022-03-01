const { PROVIDER_A, CONSUMER_A } = require("../config/queueName");
const { createRandomAndAddToQueue, consume } = require("../queue");
const { PointA } = require("../models/point");

const startProgramA = () => {
  createRandomAndAddToQueue(PROVIDER_A);
  consume(CONSUMER_A, (bool) => {
    if (bool) {
      PointA.create({
        programA: 1,
      });
    }
  });
};

module.exports = startProgramA;
