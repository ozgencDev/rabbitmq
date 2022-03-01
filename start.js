const mongoose = require("mongoose");
const startA = require("./programs/programA");
const startB = require("./programs/programB");

mongoose.connect("mongodb://localhost/point", { useNewUrlParser: true });
startA();
startB();
