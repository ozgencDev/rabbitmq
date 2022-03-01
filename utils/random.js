const _ = require("lodash");

const random = () => {
  return _.random(0, 9);
};

module.exports = random;
