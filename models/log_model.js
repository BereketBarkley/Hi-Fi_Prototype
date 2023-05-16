var sqlite3 = require('sqlite3').verbose();
var db = new sqlite3.Database('login.db');


db.serialize(() => {
  db.run("PRAGMA foreign_keys = ON;"); //enables foreign keys in sqlite3

  exports.getLogins = function(){
    db.all('SELECT * FROM log where activity = login', function(err, row){
      if(err){
        console.log(err)
      }else{
        console.log(row)
      }
    });
  }

  exports.getOrders = function(){
    db.all('SELECT * FROM log where activity = orders', function(err, row){
      if(err){
        console.log(err)
      }else{
        console.log(row)
      }
        });
  }

  exports.getUserMenu = function(){
    db.all('SELECT * FROM log where activity = updateMenu', function (order, user){
      if(user){
        console.log(order)
      }else{
        console.log(err)
      }
        });
  }

});
db.close();
