const express = require("express");
const router = express.Router();
const userModel = require("../model/userModel");

router.get("/all", (req, res) => {
  userModel
    .find()
    .then(userModel => {
      console.log(userModel);
      res.send(userModel);
    })
    .catch(err => console.log(err));
});

router.get("/:name", (req, res) => {
  let userRequested = req.params.name;
  console.log(userRequested);
  userModel
    .find({ key: userRequested })
    .then(userModel => {
      console.log(userModel);
      res.send(userModel);
    })
    .catch(err => console.log(err));
});

module.exports = router;
