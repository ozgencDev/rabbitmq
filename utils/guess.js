const random = require("./random");
const guessNum = (num) => {
  for (let i = 0; i < 5; i++) {
    const randomNum = random();
    if (randomNum == num) {
      return true;
    }
  }
  return false;
};

module.exports = guessNum;
