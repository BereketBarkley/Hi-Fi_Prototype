//const uuid = require('uuid');
const fs = require('fs');

exports.createProfile = function(name, grade){
  let users = JSON.parse(fs.readFileSync(__dirname+'/../data/users.json'));

  let newConsumer = {
    "grade": grade,
    "dietaryRestrictions":[],
    "top3Meals":[],
    "top3Sides":[],
    "orderHistory":{}
  }

  users[name] = newConsumer;
    fs.writeFileSync(__dirname+'/../data/users.json', JSON.stringify(users));

}

exports.getFavoriteMeals = function(){

}

exports.getDietaryRestrictions = function(){

}

exports.getPersonalDetails = function(){
/*
  let opponents = JSON.parse(fs.readFileSync(__dirname+'/../data/opponents.json'));
  return opponents;
  */
}


exports.orderMonday = function(){

}

exports.orderTuesday = function(){

}

exports.orderWednesday = function(){

}

exports.orderThursday = function(){

}

exports.orderFriday = function(){

}
