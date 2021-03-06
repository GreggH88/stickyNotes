var router = require("express").Router();
var connection = require("../../config/connection");


router.get("/api/notes", function(req, res) {
  connection.query("SELECT * FROM notes", function(err, dbNotes) {
    res.json(dbNotes);
  });
});

router.post("/api/notes", function(req, res) {
  connection.query("INSERT INTO notes SET ?", req.body, function(err, dbNotes) {
    res.json(dbNotes);
  });
});

router.delete("/api/notes/:id", function(req, res) {
  connection.query("DELETE FROM notes WHERE ?", {id:req.params.id}, function(err, dbNotes) {
    res.json(dbNotes);
  });
});
module.exports = router;