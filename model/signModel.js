const mongoose = require("mongoose");
const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },

  createPass: {
    type: String,
    required: true
  },

  repeatPass: {
    type: String,
    required: true
  },

  email: {
    type: String,
    required: true
  },

  avatar: {
    type: String,
    required: true
  },

  password: {
    type: String,
    required: true
  },

  date: {
    type: Date,
    required: true
  },

  __v: {
    type: Int32Array
    // type: Int32A
  }
});

module.exports = mongoose.model("city", citySchema);
