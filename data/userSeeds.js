var sqlite3 = require('sqlite3').verbose();
var db = new sqlite3.Database('log.db');


db.serialize(() => {
  db.run("PRAGMA foreign_keys = ON;"); //enables foreign keys in sqlite3

  db.run('SELECT * FROM log where activity = login', function(err, row){
    if(err) {
      throw err;
    }
    }


    db.all('SELECT * FROM log where activity = orders', function(err, row){//add a callback
      if(err){
        console.log(err)
      }else{
        console.log(row)
      }
        });


    db.all('SELECT * FROM log where activity = updateMenu', function (order, user){//add a callback
      if(user){
        console.log(order)
      }else{
        console.log(err)
      }
        });
});
db.close();
