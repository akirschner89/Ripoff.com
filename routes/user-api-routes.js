var db = require("../models");
var passport = require('passport');



module.exports = function(app, passport) {
    app.get("/api/user", function(req, res) {
        // Here we add an "include" property to our options in our findAll query
        // We set the value to an array of the models we want to include in a left outer join
        // In this case, just db.Listing
        db.User.findAll({
            include: [db.Listing]
        }).then(function(dbUser) {
            res.json(dbUser);
        });
    });

    app.get("/api/user/:id", function(req, res) {
        // Here we add an "include" property to our options in our findOne query
        // We set the value to an array of the models we want to include in a left outer join
        // In this case, just db.Listing
        db.User.findOne({
            where: {
                id: req.params.id
            },
            include: [db.Listing]
        }).then(function(dbUser) {
            res.json(dbUser);
        });
    });

    app.post("/api/user", function(req, res) {
        db.User.create(req.body).then(function(dbUser) {
            res.json(dbUser);
        });
    });


    app.delete("/api/user/:id", function(req, res) {
        db.User.destroy({
            where: {
                id: req.params.id
            }
        }).then(function(dbUser) {
            res.json(dbUser);
        });
    });

};