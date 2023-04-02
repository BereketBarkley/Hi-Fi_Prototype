//const uuid = require('uuid');
const fs = require('fs');


exports.getTopMeals = function(){
  let history = JSON.parse(fs.readFileSync(__dirname+'/../data/mealStats.json'));
  let rank = {}
  for(meal in history){
    rank[meal] = history[meal].numOrdered / history[meal].numServed;
  }

  let a = JSON.stringify(rank);

  let b = Array.from(rank);
  /*
  let c = b.toString();
  let d = JSON.parse(c);
  */
  return b;
}

exports.getWorstMeals = function(){

}

exports.getMondayStats = function(){

}

exports.getTuesdayStats = function(){

}

exports.getWednesdayStats = function(){

}

exports.getThursdayStats = function(){

}

exports.getFridayStats = function(){

}

exports.refreshWeek = function(){

}


exports.setMenu = function(){

}
