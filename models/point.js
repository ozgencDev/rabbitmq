const mongoose = require("mongoose");

const pointSchemaA = new mongoose.Schema(
  {
    programA: Number,
  },
  {
    versionKey: false,
  }
);
const pointSchemaB = new mongoose.Schema(
  {
    programB: Number,
  },
  {
    versionKey: false,
  }
);

const PointA = mongoose.model("programA", pointSchemaA);
const PointB = mongoose.model("programB", pointSchemaB);

module.exports = { PointA, PointB };
