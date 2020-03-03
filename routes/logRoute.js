const express = require("express");
const router = express.Router();
const userModel = require("../model/userModel");

router.post("/LogIn", async (req, res) => {
  // check("name", "Username is required").notEmpty();
  // check("createPass", "Password is required").notEmpty();

  // var errors = validationResult(req);
  const name = req.body.name;
  const password = req.body.createPass;
  console.log("log in route");

  // if (!errors.isEmpty()) {
  //   return res.status(400).json(errors);
  // }

  // SEND TOKEN AND RECEIVE IN POSTMAN
  // THEN LOGIN COMPONENT ACTIONS

  userModel
    .findOne({ name })
    .then(user => {
      if (!user) {
        return res.status(400).json({
          name: "No user found with the inputed name"
        });
      } else {
        if (password === user.createPass) {
          return res.status(200).json({
            user,
            password: "Login succesfull"
          });
        } else {
          return res.status(200).json({
            password: "Password was incorrect"
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
