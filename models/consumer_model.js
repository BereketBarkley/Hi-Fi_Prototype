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



exports.updateDietaryRestrictions = function(r1,r2,r3,user){
  let users = JSON.parse(fs.readFileSync(__dirname+'/../data/users.json'));


  for(useri in users){

    if(useri == user){
      users[useri]["dietaryRestrictions"]= [r1,r2,r3];


    }
  }

    fs.writeFileSync(__dirname+'/../data/users.json', JSON.stringify(users));
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

exports.updateTopMeals = function(d1,d2,d3,user){
  let users = JSON.parse(fs.readFileSync(__dirname+'/../data/users.json'));


  for(useri in users){

    if(useri == user){
      users[useri]["top3Meals"]= [d1,d2,d3];


    }
  }

    fs.writeFileSync(__dirname+'/../data/users.json', JSON.stringify(users));
}

exports.updateGrade = function(grade,user){
  let users = JSON.parse(fs.readFileSync(__dirname+'/../data/users.json'));


  for(useri in users){

    if(useri == user){
      users[useri]["grade"]= grade;


    }
  }

    fs.writeFileSync(__dirname+'/../data/users.json', JSON.stringify(users));
}

exports.updateMealStats = function(order){
  let stats = JSON.parse(fs.readFileSync(__dirname+'/../data/mealStats.json'));

  for(let i = 0; i < 4; i++){
    for(meal in stats){
      if(meal == order[i]){
        stats[meal]["numOrdered"] += 1;
      }
    }
  }

    fs.writeFileSync(__dirname+'/../data/mealStats.json', JSON.stringify(stats));
}



exports.getOrderHistory = function(user){
  let users = JSON.parse(fs.readFileSync(__dirname+'/../data/users.json'));

  for(useri in users){

    if(useri == user){
      return users[useri]["orderHistory"];
    }
  }

}
exports.getGrade = function(user){
  let users = JSON.parse(fs.readFileSync(__dirname+'/../data/users.json'));

  for(useri in users){

    if(useri == user){
      return users[useri]["grade"];
    }
  }

}
exports.getDietaryRestrictions = function(user){
  let users = JSON.parse(fs.readFileSync(__dirname+'/../data/users.json'));

  for(useri in users){

    if(useri == user){
      return users[useri]["dietaryRestrictions"];
    }
  }
}
exports.getTop3Meals = function(user){
  let users = JSON.parse(fs.readFileSync(__dirname+'/../data/users.json'));

  for(useri in users){

    if(useri == user){
      return users[useri]["top3Meals"];
    }
  }
}
