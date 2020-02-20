const mongoose = require("mongoose");
const itinerarySchema = new mongoose.Schema({
  title: {
    type: String,
    required: true
  },
  url: {
    type: String,
    required: true
  },

  rating: {
    type: String,
    required: true
  },
  duration: {
    type: String,
    required: true
  },
  price: {
    type: String,
    required: true
  },
  hashtags: {
    type: String,
    required: true
  },

  key: {
    type: String,
    required: true
  }
});

module.exports = mongoose.model("itinerary", itinerarySchema);
