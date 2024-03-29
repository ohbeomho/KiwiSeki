const { Schema, model } = require("mongoose");

const userSchema = new Schema({
  username: {
    type: String,
    required: true
  },
  password: {
    type: String,
    required: true
  },
  editCount: {
    type: Number,
    default: 0
  },
  wikiCount: {
    type: Number,
    default: 0
  }
});

module.exports = model("User", userSchema);
