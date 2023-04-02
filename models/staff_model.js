//const uuid = require('uuid');
const fs = require('fs');


exports.getMenu = function(){
  let menu = JSON.parse(fs.readFileSync(__dirname+'/../data/menu.json'));
  return menu;
}

exports.getOrderList = function(){
  let orderList = JSON.parse(fs.readFileSync(__dirname+'/../data/weekOrders.json'));
  return orderList;
  /*
  let usersJSON = JSON.parse(fs.readFileSync(__dirname+'/../data/users.json'));
  let menu = JSON.parse(fs.readFileSync(__dirname+'/../data/menu.json'));

  let day = menu["day"];
  let orderList = [];

  for(users in usersJSON){
    for(days in usersJSON[users]){
      if(days = day){
        orderList.users =
      }
    }
  }
  */
}

exports.countMeals = function(){
  let orderList = JSON.parse(fs.readFileSync(__dirname+'/../data/weekOrders.json'));
  let menu = JSON.parse(fs.readFileSync(__dirname+'/../data/menu.json'));
  let count = 0;
  for(user in orderList){
    if(orderList[user][menu.day].meal != "n/a"){
      count += 1;
    }
  }
  return count;
}

exports.countSide1 = function(){
  let orderList = JSON.parse(fs.readFileSync(__dirname+'/../data/weekOrders.json'));
  let menu = JSON.parse(fs.readFileSync(__dirname+'/../data/menu.json'));
  let count = 0;
  for(user in orderList){
    if(orderList[user][menu.day].side1 != "n/a"){
      count += 1;
    }
  }
  return count;
}


exports.countSide2 = function(){
  let orderList = JSON.parse(fs.readFileSync(__dirname+'/../data/weekOrders.json'));
  let menu = JSON.parse(fs.readFileSync(__dirname+'/../data/menu.json'));
  let count = 0;
  for(user in orderList){
    if(orderList[user][menu.day].side2 != "n/a"){
      count += 1;
    }
  }
  return count;
}


exports.countDessert = function(){
  let orderList = JSON.parse(fs.readFileSync(__dirname+'/../data/weekOrders.json'));
  let menu = JSON.parse(fs.readFileSync(__dirname+'/../data/menu.json'));
  let count = 0;
  for(user in orderList){
    if(orderList[user][menu.day].dessert != "n/a"){
      count += 1;
    }
  }
  return count;
}
