var mysql = require("mysql");
// require('dotenv').config();
var db;

// Sets up db to connect locally or on JAWSDB if deployed
if (process.env.JAWSDB_URL) {
  db = mysql.createConnection(process.env.JAWSDB_URL);
} else {
  db = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "08816674b",
    database: "notetaker_db"
  });
}

// Export the connection so it's available in other parts of the app
module.exports = db;
