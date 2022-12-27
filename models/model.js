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
    rule: {
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
  { collection: "Problems" }
);

module.exports = mongoose.model("Problems", dataSchema);
