var express = require("express");
var router = express.Router();
var db = require("../models/");


router.get("/", function(req, res) {
  db.listing.findAll({})
    .then(function(data) {
      var hbsObject = {listing: data}
      res.render("index", listing);
    });
});



router.post("/", function(req, res) {
  db.listing.create({
      title: req.body.name,
    })
    .then(function() {
      res.redirect("/");
    });
});

//for updating listing info - to revisit
// router.put("/:id", function(req, res) {
//   db.listing.update({
//     devoured: true
//       }, {
//         where: {
//           id: req.params.id
//         },

//       }).then(function() {
//       res.redirect("/");
//     });
// });

router.get("/", function(req, res) {
  db.user.findAll({})
    .then(function(data) {
      var hbsObject = {user: data}
      res.render("index", user);
    });
});



router.post("/", function(req, res) {
  db.user.create({
      name: req.body.name,
    })
    .then(function() {
      res.redirect("/");
    });
});

//for updating user info - to revisit
// router.put("/:id", function(req, res) {
//   db.listing.update({
//     devoured: true
//       }, {
//         where: {
//           id: req.params.id
//         },

//       }).then(function() {
//       res.redirect("/");
//     });
// });


module.exports = router;
