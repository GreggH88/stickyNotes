var mysql = require("mysql");

var db;

// Sets up db to connect locally or on JAWSDB if deployed
if (process.env.JAWSDB_URL) {
  db = mysql.createConnection(process.env.JAWSDB_URL);
} else {
  db = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: process.env.sqlPass,
    database: "stickyNotesDB"
  });
}

// Export the connection so it's available in other parts of the app
module.exports = db;
