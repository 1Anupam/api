const mongoose = require("mongoose");

const dataSchema = new mongoose.Schema(
  {
    equ: {
      required: true,
      type: String,
    },
    direction: {
      required: true,
      type: String,
    },
    answer: {
      required: true,
      type: String,
    },
    user: {
      required: true,
      type: String,
    },
  },
  { collection: "tests" }
);

module.exports = mongoose.model("tests", dataSchema);
