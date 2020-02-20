const express = require("express");
const router = express.Router();
const cityModel = require("../model/itineraryModel");

router.get("/test", (req, res) => {
  res.send({ msg: "Itinerary test route." });
});

router.get("/:name", (req, res) => {
  let itineraryRequested = req.params.name;
  itineraryModel
    .findOne({ name: itinerary })
    .then(itinerary => {
      res.send(itinerary);
    })
    .catch(err => console.log(err));
});

module.exports = router;
