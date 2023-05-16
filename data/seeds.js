var sqlite3 = require('sqlite3').verbose();
var db = new sqlite3.Database('log.db');

db.serialize(() => {

db.run("PRAGMA foreign_keys = ON;"); //enables foreign keys in sqlite3

db.run("INSERT INTO log (activity,user, loggedIn) VALUES (?,?,?)",
  function(err) {
    if (err) { throw err;}
  }
);
db.all('SELECT * FROM log', function(err, rows){
  if(err){
    console.log(err);
  } else {
    console.log(rows);
  }
});

db.close();
