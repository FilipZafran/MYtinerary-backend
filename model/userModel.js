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

  email: {
    type: String,
    required: true
  },

  avatar: {
    type: String,
    requred: true
  },

  favouriteItineraries: {
    type: Array
  }

  // date: {
  //   type: Date,
  //   required: true
  // }

  // __v: {
  //   type: Int32Array
  //   // type: Int32A
  // }
});

module.exports = mongoose.model("user", userSchema);
