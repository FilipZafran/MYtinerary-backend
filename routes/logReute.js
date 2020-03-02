const express = require("express");
const router = express.Router();
const logModel = require("../model/logModel");

router.post("/LogIn", async (req, res) => {
  check("name", "Username is required").notEmpty();
  check("password", "Password is required").notEmpty();

  var errors = validationResult(req);

  console.log("log in route");

  if (!errors.isEmpty()) {
    return res.status(400).json(errors);
  }

  logModel.findOne({ email }).then(log => {
    if (log) {
      return res.status(400).json({ email: "Email already exists" });
    }
  });

  const logIn = new logModel({
    name: req.body.name,
    password: req.body.password
  });

  logIn
    .save()
    .then(logIn => {
      res.send(logIn);
    })
    .catch(err => {
      console.log(err);
      res.send(err);
    });
});

module.exports = router;
