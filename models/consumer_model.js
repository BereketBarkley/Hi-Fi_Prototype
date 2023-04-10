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

exports.updateWeekOrders = function(order,usera, day){
  let orders = JSON.parse(fs.readFileSync(__dirname+'/../data/weekOrders.json'));

  let exists = false;

  for(student in orders){

    if(usera == student){
      for(daya in orders[student]){
        if(daya == day){
          orders[student][daya]["meal"] = order[0];
          orders[student][daya]["side1"] = order[1];
          orders[student][daya]["side2"] = order[2];
          orders[student][daya]["dessert"] = order[3];

          //a["meal"] = order[3];
        }

        //a["day"] = orders[student][day];
      }
      exists = true;
    }

  }
  if(exists == false){
    orders[usera] = {
      "monday":{"meal":"mealname", "side1":"n/a", "side2":"2name", "dessert":"dname"},
      "tuesday": {"meal":"mealname", "side1":"name", "side2":"name", "dessert":"name"},
      "wednesday": {"meal":"mealname", "side1":"name", "side2":"name", "dessert":"name"},
      "thursday": {"meal":"mealname", "side1":"name", "side2":"name", "dessert":"name"},
      "friday": {"meal":"mealname", "side1":"name", "side2":"name", "dessert":"name"}
    }

    for(student in orders){

      if(usera == student){
        for(daya in orders[student]){
          if(daya == day){
            orders[student][daya]["meal"] = order[0];
            orders[student][daya]["side1"] = order[1];
            orders[student][daya]["side2"] = order[2];
            orders[student][daya]["dessert"] = order[3];

            //a["meal"] = order[3];
          }

          //a["day"] = orders[student][day];
        }
        exists = true;
      }

    }
  }


  fs.writeFileSync(__dirname+'/../data/weekOrders.json', JSON.stringify(orders));
}

exports.getPersonalDetails = function(){
/*
  let opponents = JSON.parse(fs.readFileSync(__dirname+'/../data/opponents.json'));
  return opponents;
  */
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

exports.updateTopMeals = function(){
  let users = JSON.parse(fs.readFileSync(__dirname+'/../data/users.json'));

}


exports.order = function(order){
  let menu = JSON.parse(fs.readFileSync(__dirname+'/../data/menu.json'));
  let newMenu={
    "a":order

  }
    fs.writeFileSync(__dirname+'/../data/s.json', JSON.stringify(newMenu));

}
