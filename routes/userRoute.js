const bcrypt = require("bcrypt");
const saltRounds = 10;

const express = require("express");
const router = express.Router();
const userModel = require("../model/userModel");
const { check, validationResult } = require("express-validator");
router.post("/SignUp", async (req, res) => {
  const pwd = req.body.createPass;
  const name = req.body.name;
  console.log("req.body", req.body);
  check("name", "Username is required").notEmpty();
  check("createPass", "Password is required").notEmpty();
  check("passRepeat", "Passwords do not match").equals(req.body.passRepeat);
  check("email", "Email is required").notEmpty();
  check("email", "Email is not valid").isEmail();

  var errors = validationResult(req);

  console.log("i am in the sign up route");

  if (!errors.isEmpty()) {
    return res.status(400).json(errors);
  }

  userModel.findOne({ name }).then(user => {
    if (user) {
      return res.status(400).json({ name: "Name already exists" });
    }
  });

  bcrypt.hash(pwd, saltRounds, function(err, hash) {
    if (err) {
      res.send(err);
    }
    console.log("req.body", req.body);
    const newUser = new userModel({
      name: req.body.name,
      createPass: hash,
      email: req.body.email,
      avatar: req.body.avatar
    });

    newUser
      .save()
      .then(newUser => {
        res.send(newUser);
      })
      .catch(err => {
        console.log(err);
        res.send(err);
      });
  });
});

module.exports = router;
