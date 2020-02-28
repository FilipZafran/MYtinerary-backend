const express = require("express");
const router = express.Router();
const signModel = require("../model/signModel");

//add POST, takes user info and go in the DB to check
router.post("/SignUp", async (req, res) => {
  // const { name, createPass, repeatPass, email, avatar } = req.body;
  console.log("req.body", req.body);
  const newUser = new signModel({
    name: req.body.name,
    createPass: req.body.createPass,
    email: req.body.email,
    avatar: req.body.avatar
  });
  console.log(newUser);

  // bcrypt.genSalt(10, (err, salt) => {
  //     bcrypt.hash(newUser.createPass, salt, (err, hash) => {
  //       if (err) throw err;
  //       newUser.createPass = hash;

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

//

//TIP = reformat to user
// router.get("/:name", (req, res) => {
//   let cityRequested = req.params.name;
//   cityModel
//     .findOne({ us: cityRequested })
//     .then(city => {
//       res.send(city);
//     })
//     .catch(err => console.log(err));
// });

//

// cheks email
// hash pass / encrypt
// then create User

//////////////////////
// router.post("/SignUp", (req, res) => {
//   const newSign = new signModel({
//     name: this.state.name,
//     createPass: this.state.createPass,
//     repeatPass: this.state.repeatPass,
//     email: this.state.email,
//     avatar: this.state.avatar
//     //   password: this.state.password
//   });
//   newSign
//     .save()
//     .then(sign => {
//       res.send(sign);
//     })
//     .catch(err => {
//       res.status(500).send("Server error");
//     });
// });

// router.get("/:name", (req, res) => {
//   let userRequested = req.params.name;
//   console.log(userRequested);
//   userModel
//     .find({ key: userRequested })
//     .then(userModel => {
//       console.log(userModel);
//       res.send(userModel);
//     })
//     .catch(err => console.log(err));
// });

module.exports = router;
