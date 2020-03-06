const express = require("express");
const router = express.Router();
const userModel = require("../model/userModel");

const key = require("../keys");

router.post("/LogIn", async (req, res) => {
  // check("name", "Username is required").notEmpty();
  // check("createPass", "Password is required").notEmpty();

  // var errors = validationResult(req);
  const name = req.body.name;
  const password = req.body.createPass;
  console.log("log in route");

  const payload = {
    name: user.name,
    email: user.email,
    avatar: user.avatar
  };
  const options = { expiresIn: 2592000 };
  jwt.sign(payload, key.secretOrKey, options, (err, token) => {
    if (err) {
      res.json({
        success: false,
        token: "There was an error"
      });
    } else {
      res.json({
        success: true,
        token: token
      });
    }
  });

  // if (!errors.isEmpty()) {
  //   return res.status(400).json(errors);
  // }

  // 1. SEND TOKEN AND RECEIVE IN POSTMAN
  // 2. THEN LOGIN COMPONENT ACTIONS

  userModel
    .findOne({ name })
    .then(user => {
      if (!user) {
        return res.status(400).json({
          result: "No user found with the inputed name"
        });
      } else {
        if (password === user.createPass) {
          return res.status(200).json({
            user,
            result: "Login succesfull"

            // DISPLAY THESE MESSAGES IN COMPONENT (?)
          });
        } else {
          return res.status(200).json({
            result: "Password was incorrect"
          });
        }
      }
    })

    .catch(err => {
      console.log(err);
      res.send(err);
    });
});

module.exports = router;
