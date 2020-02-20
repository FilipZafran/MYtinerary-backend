const express = require("express");
const router = express.Router();
const cityModel = require("../model/cityModel");

// router.get("/test", (req, res) => {
//   res.send({ msg: "Cities test route." });
// });

router.get("/all", (req, res) => {
  cityModel
    .find({})
    .then(files => {
      res.send(files);
    })
    .catch(err => console.log(err));
});

// router.get("/:name", (req, res) => {
//   let cityRequested = req.params.name;
//   cityModel
//     .findOne({ city: cityRequested })
//     .then(city => {
//       res.send(city);
//     })
//     .catch(err => console.log(err));
// });

router.post("/", async (req, res, next) => {
  const { city, country, url } = req.body;

  let existingCity;

  try {
    existingCity = await cityModel.findOne({ city: city });
  } catch (err) {
    const error = new HttpError("Couldn't add new place", 500);
    return next(error);
  }

  if (existingCity) {
    const error = new HttpError(
      "The chosen city exists. Please choose another one...",
      422
    );
    return next(error);
  }

  const newCity = new cityModel({
    city: city,
    country: country,
    url: url
  });

  newCity
    .save()
    .then(city => {
      res.send(city);
    })
    .catch(err => {
      res.status(500).send("Server Error");
    });
});

router.get("/:cityId", (req, res) => {
  let cityRequested = req.params.cityId;

  itineraryModel
    .find({ city: cityRequested })
    .then(itineraries => {
      res.send(itineraries);
    })
    .catch(err => console.log(err));
});

module.exports = router;
