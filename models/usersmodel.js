const mongoose = require("mongoose");

const dataSchema = new mongoose.Schema(
  {
    password: {
      required: true,
      type: String,
    },
    userName: {
      required: true,
      type: String,
    },
  },
  { collection: "users" }
);

module.exports = mongoose.model("users", dataSchema);
