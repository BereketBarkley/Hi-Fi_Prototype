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

exports.getMenu = function(){
  let menu = JSON.parse(fs.readFileSync(__dirname+'/../data/menu.json'));
  return menu;
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

exports.updateUserHistory = function(){
  let users = JSON.parse(fs.readFileSync(__dirname+'/../data/users.json'));

}

exports.order = function(order){
  let menu = JSON.parse(fs.readFileSync(__dirname+'/../data/menu.json'));
  let newMenu={
    "a":order

  }
    fs.writeFileSync(__dirname+'/../data/s.json', JSON.stringify(newMenu));

}
