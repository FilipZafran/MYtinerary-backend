const express = require("express");
const router = express.Router();
const itineraryModel = require("../model/itineraryModel");

router.get("/all", (req, res) => {
  itineraryModel
    .find()
    .then(itinerary => {
      console.log(itinerary);
      res.send(itinerary);
    })
    .catch(err => console.log(err));
});

router.get("/:name", (req, res) => {
  let itineraryRequested = req.params.name;
  console.log(itineraryRequested);
  itineraryModel
    .find({ key: itineraryRequested })
    .then(itinerary => {
      console.log(itinerary);
      res.send(itinerary);
    })
    .catch(err => console.log(err));
});

module.exports = router;
