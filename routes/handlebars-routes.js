var path = require("path");

// Routes
// =============================================================
module.exports = function(app) {

  // Each of the below routes just handles the HTML page that the user gets sent to.

  // index route loads view.html
  app.get("/", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/board.html"));
  });

  // cms route loads cms.html
  app.get("/cms", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/cms.html"));
  });

  // board route loads board.html
  app.get("/board", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/board.html"));
  });

  // authors route loads author-manager.html
  app.get("/user", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/user-manager.html"));
  });

};