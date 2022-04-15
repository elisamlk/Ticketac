var express = require("express");
var router = express.Router();
var userModel = require("../models/users");

const mongoose = require("mongoose");

var journeySchema = mongoose.Schema({
  departure: String,
  arrival: String,
  date: Date,
  departureTime: String,
  price: Number,
});

var journeyModel = mongoose.model("trains", journeySchema);

var city = [
  "Paris",
  "Marseille",
  "Nantes",
  "Lyon",
  "Rennes",
  "Melun",
  "Bordeaux",
  "Lille",
];
var date = [
  "2018-11-20",
  "2018-11-21",
  "2018-11-22",
  "2018-11-23",
  "2018-11-24",
];

/*router.get("/", async function (req, res, next) {
  await journeyModel.deleteMany();
  res.render("homepage");
});
*/

router.get("/", function (req, res, next) {
  res.render("login");
});

router.post("/sign-up", async function (req, res, next) {
  var searchUser = await userModel.findOne({
    email: req.body.emailFromFront,
  });

  if (!searchUser) {
    var newUser = new userModel({
      firstName: req.body.firstNameFromFront,
      lastName: req.body.lastNameFromFront,
      email: req.body.emailFromFront,
      password: req.body.passwordFromFront,
    });

    var newUserSave = await newUser.save();
    console.log(newUserSave);

    req.session.user = {
      lastName: newUserSave.lastName,
      id: newUserSave._id,
    };

    res.redirect("/homepage");
  } else {
    res.redirect("login");
  }
});

router.post("/sign-in", async function (req, res, next) {
  var searchUser = await userModel.findOne({
    email: req.body.emailFromFront,
    password: req.body.passwordFromFront,
  });

  console.log(searchUser);

  if (searchUser != null) {
    req.session.user = {
      lastName: searchUser.lastName,
      id: searchUser._id,
    };
    res.redirect("/homepage");
  } else {
    res.render("login");
  }
});

router.get("/trains", async function (req, res, next) {
  var journeyList = await journeyModel.find();
  console.log(journeyList);
  res.render("trains");
});

/*
router.post("/trains", async function (req, res, next) {
  var trainsUser = await usersModel.find({ journeySchema });

  if (!trainsUser) {
    var newUser = new journeyModel({
      departure: req.body.departureFromFront,
      arrival: req.body.arrivalFromFront,
      date: req.body.dateFromFront,
      departureTime: req.body.timeFromFront,
      price: req.body.priceFromFront,
    });

    var newUserSave = await newUser.save();

    res.redirect("/trains");
  } else {
    res.redirect("/error");
  }
  res.redirect("/");
});

// POST signup page //
router.post("/signup", async function (req, res, next) {
  var searchUser = await signupModel.findOne({
    email: req.body.emailFromFront,
  });

  if (!searchUser) {
    var newUser = new signupModel({
      name: req.body.nameFromFront,
      firstname: req.body.firstnameFromFront,
      email: req.body.emailFromFront,
      password: req.body.passwordFromFront,
    });

    var newUserSave = await newUser.save();

    req.session.user = {
      name: newUserSave.username,
      id: newUserSave._id,
    };

    console.log(req.session.user);

    res.redirect("/homepage");
  } else {
    res.redirect("/");
  }
});

// POST signin page //

router.post("/signin", async function (req, res, next) {
  var searchUser = await signinModel.findOne({
    email: req.body.emailFromFront,
    password: req.body.passwordFromFront,
  });

  if (searchUser != null) {
    req.session.user = {
      name: searchUser.username,
      id: searchUser._id,
    };
    res.redirect("/homepage");
  } else {
    res.render("login");
  }
});

router.get("/logout", function (req, res, next) {
  req.session.user = null;

  res.redirect("/");
});
*/

// //Remplissage de la base de donnée, une fois suffit
// router.get("/save", async function (req, res, next) {
//   // How many journeys we want
//   var count = 300;

//   // Save  ---------------------------------------------------
//   for (var i = 0; i < count; i++) {
//     departureCity = city[Math.floor(Math.random() * Math.floor(city.length))];
//     arrivalCity = city[Math.floor(Math.random() * Math.floor(city.length))];

//     if (departureCity != arrivalCity) {
//       var newUser = new journeyModel({
//         departure: departureCity,
//         arrival: arrivalCity,
//         date: date[Math.floor(Math.random() * Math.floor(date.length))],
//         departureTime: Math.floor(Math.random() * Math.floor(23)) + ":00",
//         price: Math.floor(Math.random() * Math.floor(125)) + 25,
//       });

//       await newUser.save();
//     }
//   }
//   res.render("index", { title: "Express" });
// });

// // Cette route est juste une verification du Save.
// // Vous pouvez choisir de la garder ou la supprimer.
// router.get("/result", function (req, res, next) {
//   // Permet de savoir combien de trajets il y a par ville en base
//   for (i = 0; i < city.length; i++) {
//     journeyModel.find(
//       { departure: city[i] }, //filtre

//       function (err, journey) {
//         console.log(
//           `Nombre de trajets au départ de ${journey[0].departure} : `,
//           journey.length
//         );
//       }
//     );
//   }

//   res.render("index", { title: "Express" });
// });

module.exports = router;
