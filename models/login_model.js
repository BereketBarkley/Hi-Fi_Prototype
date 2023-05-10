var sqlite3 = require('sqlite3').verbose();
var db = new sqlite3.Database('login.db');


db.serialize(() => {
  db.run("PRAGMA foreign_keys = ON;"); //enables foreign keys in sqlite3
  db.all('SELECT * FROM getMealStats', function(){
    let stats = JSON.parse(fs.readFileSync(__dirname+'/../data/mealStats.json'))
    console.log(stats);
  }
});
db.close();

exports.getMealStats = function(){
  let stats = JSON.parse(fs.readFileSync(__dirname+'/../data/mealStats.json'));
  return stats;
}


exports.updateUserHistory = function(order, user){
  let users = JSON.parse(fs.readFileSync(__dirname+'/../data/users.json'));


  for(useri in users){

    if(useri == user){
      //a["a"] = users[useri]["orderHistory"];
      let iter = 1;
      for(orders in users[useri]["orderHistory"]){
        iter+=1;
      }
       //let a = Math.random();
       users[useri]["orderHistory"][iter] = order;
    }
  }

    fs.writeFileSync(__dirname+'/../data/users.json', JSON.stringify(users));

}

exports.getGrade = function(user){
  let users = JSON.parse(fs.readFileSync(__dirname+'/../data/users.json'));

  for(useri in users){

    if(useri == user){
      return users[useri]["grade"];
    }
  }

}
