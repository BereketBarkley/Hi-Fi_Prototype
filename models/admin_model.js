//const uuid = require('uuid');
const fs = require('fs');


exports.getTopMeals = function(){
  let history = JSON.parse(fs.readFileSync(__dirname+'/../data/mealStats.json'));
  let rank = {}
  for(meal in history){
    rank[meal] = history[meal].numOrdered / history[meal].numServed;
  }
  let count = 1;
  let finalrank = {};
  for(meal in rank){
    count = 0;
    for(comparemeal in rank){
      if(meal != comparemeal && rank[comparemeal]> rank[meal]){
        count += 1;
      }
    }
    if(count == 0){
      finalrank["first"] = meal;
    }
    if(count == 1){
      finalrank["second"] = meal;
    }
    if(count == 2){
      finalrank["third"] = meal;
    }
  }
  return finalrank;
}



exports.getMealRankings = function(){
  let history = JSON.parse(fs.readFileSync(__dirname+'/../data/mealStats.json'));
  let rank = {}
  for(meal in history){
    rank[meal] = history[meal].numOrdered / history[meal].numServed;
  }
  return rank;
}

exports.getMondayStats = function(){
  let weekOrders = JSON.parse(fs.readFileSync(__dirname+'/../data/weekOrders.json'));
  let mondayOrders = {}
  for(consumer in weekOrders){
    mondayOrders[consumer] = weekOrders[consumer]["monday"];
  }
  return mondayOrders;
}

exports.getTuesdayStats = function(){
  let weekOrders = JSON.parse(fs.readFileSync(__dirname+'/../data/weekOrders.json'));
  let tuesdayOrders = {}
  for(consumer in weekOrders){
    tuesdayOrders[consumer] = weekOrders[consumer]["tuesday"];
  }
  return tuesdayOrders;
}

exports.getWednesdayStats = function(){
  let weekOrders = JSON.parse(fs.readFileSync(__dirname+'/../data/weekOrders.json'));
  let wednesdayOrders = {}
  for(consumer in weekOrders){
    wednesdayOrders[consumer] = weekOrders[consumer]["wednesday"];
  }
  return wednesdayOrders;
}

exports.getThursdayStats = function(){
  let weekOrders = JSON.parse(fs.readFileSync(__dirname+'/../data/weekOrders.json'));
  let thursdayOrders = {}
  for(consumer in weekOrders){
    thursdayOrders[consumer] = weekOrders[consumer]["thursday"];
  }
  return thursdayOrders;
}

exports.getFridayStats = function(){
  let weekOrders = JSON.parse(fs.readFileSync(__dirname+'/../data/weekOrders.json'));
  let fridayOrders = {}
  for(consumer in weekOrders){
    fridayOrders[consumer] = weekOrders[consumer]["friday"];
  }
  return fridayOrders;
}

exports.refreshWeek = function(){
  let weekOrders = JSON.parse(fs.readFileSync(__dirname+'/../data/weekOrders.json'));

  let clearedWO={}
  fs.writeFileSync(__dirname+'/../data/weekOrders.json', JSON.stringify(clearedWO));
}


exports.setMenu = function(day, mealName,side1,side2,dessert){
  let menu = JSON.parse(fs.readFileSync(__dirname+'/../data/menu.json'));
  let newMenu={
    "day": day,
    "meal": mealName,
    "side1": side1,
    "side2": side2,
    "dessert": dessert,

  }
    fs.writeFileSync(__dirname+'/../data/menu.json', JSON.stringify(newMenu));

}
