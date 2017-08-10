var express = require("express");
var router = express.Router();
var db = require("../models");


router.get("/", function (req, res) {
    db.Listing.findAll({
        include: db.Images
    })
        .then(function (data) {
            // res.send(JSON.stringify(data));
            // var picName = data[0].dataValues.Images[0].imageName;
            var hbsObject = { Listings: data }
            res.render("index", hbsObject);
        });
});

router.get("/index", function(req, res) {
    res.render("index.handlebars");
})


router.get("/login", function(req, res) {
    res.render("login.handlebars");
})

router.get("/sell", function(req, res) {
    res.render("sell.handlebars");
})

router.get("/upload", function(req, res) {
    res.render("uploadpic");
})






// router.post("/", function(req, res) {
//   db.Listing.create({
//       title: req.body.name,
//     })
//     .then(function() {
//       res.redirect("/");
//     });
// });

// for updating Listing info - to revisit
// router.put("/:id", function(req, res) {
//   db.Listing.update({
//     body: req.body.info
//       }, {
//         where: {
//           id: req.params.id
//         }
//       }).then(function() {
//       res.redirect("/");
//     });
// });

module.exports = router;

// router.get("/", function(req, res) {
//   db.user.findAll({})
//     .then(function(data) {
//       var hbsObject = {user: data}
//       res.redirect("index", hbdObject);
//     });
// });



// router.post("/", function(req, res) {
//   db.user.create({
//       name: req.body.name,
//     })
//     .then(function() {
//       res.redirect("/");
//     });
// });

//for updating user info - to revisit
// router.put("/:id", function(req, res) {
//   db.Listing.update({
//     devoured: true
//       }, {
//         where: {
//           id: req.params.id
//         },

//       }).then(function() {
//       res.redirect("/");
//     });
// });


// module.exports = router;