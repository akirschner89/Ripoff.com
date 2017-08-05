// Requiring our models
var db = require("../models");

// Routes
// =============================================================
module.exports = function(app) {

  // GET route for getting all of the listing
  app.get("/api/listing", function(req, res) {
    var query = {};
    if (req.query.user_id) {
      query.UserId = req.query.user_id;
    }
    // Here we add an "include" property to our options in our findAll query
    // We set the value to an array of the models we want to include in a left outer join
    // In this case, just db.User
    db.Listing.findAll({
      where: query,
      include: [db.User]
    }).then(function(dbListing) {
      res.json(dbListing);
    });
  });

  // Get rotue for retrieving a single Listing
  app.get("/api/listing/:id", function(req, res) {
    // Here we add an "include" property to our options in our findOne query
    // We set the value to an array of the models we want to include in a left outer join
    // In this case, just db.User
    db.Listing.findOne({
      where: {
        id: req.params.id
      },
      include: [db.User]
    }).then(function(dbListing) {
      res.json(dbListing);
    });
  });

  // Listing route for saving a new Listing
  app.Listing("/api/listing", function(req, res) {
    db.Listing.create(req.body).then(function(dbListing) {
      res.json(dbListing);
    });
  });

  // DELETE route for deleting listing
  app.delete("/api/listing/:id", function(req, res) {
    db.Listing.destroy({
      where: {
        id: req.params.id
      }
    }).then(function(dbListing) {
      res.json(dbListing);
    });
  });

  // PUT route for updating listing
  app.put("/api/listing", function(req, res) {
    db.Listing.update(
      req.body,
      {
        where: {
          id: req.body.id
        }
      }).then(function(dbListing) {
        res.json(dbListing);
      });
  });
};
