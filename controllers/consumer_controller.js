const express = require('express'),
  router = express.Router();

const Consumer = require('../models/consumer_model');

function loggedIn(request, response, next) {
  if (request.user) {
    next();
  } else {
    response.redirect('/login');
  }
}


router.get('/addtoProfile', loggedIn, function(request, response) {

    let stats = Consumer.getMealStats();
    response.status(200);
    response.setHeader('Content-Type', 'text/html')
    response.render("consumer/addtoProfile",{
      user: request.user,
      stats: stats
  });
});


router.get('/orderingPage', loggedIn, function(request, response) {
    let menu = Consumer.getMenu();

    response.status(200);
    response.setHeader('Content-Type', 'text/html')
    response.render("consumer/orderingPage",{
      user: request.user,
      menu:menu
    });
});


//
router.post('/addtoProfile', loggedIn, function(request, response){

  let user = request.body.useremail;

  let r1= request.body.r1;
  let r2= request.body.r2;
  let r3= request.body.r3;
  let grade = request.body.grade;

  let d1 = request.body.dish1;
  let d2 = request.body.dish2;
  let d3 = request.body.dish3;

  Consumer.updateTopMeals(d1,d2,d3,user);
  Consumer.updateDietaryRestrictions(r1,r2,r3, user);
  Consumer.updateGrade(grade, user);

  //Consumer.addtoProfile(user, r1,r2,r3,grade,d1,d2,d3);
    response.setHeader('Content-Type', 'text/html')
    response.redirect('/profile');



});

router.get('/profile', loggedIn, function(request, response) {
  let user = request.user._json.email;
  let orderHistory = Consumer.getOrderHistory(user);
  let grade = Consumer.getGrade(user);
  let dietaryRestrictions = Consumer.getDietaryRestrictions(user);
  let top3Meals = Consumer.getTop3Meals(user);

  response.status(200);
  response.setHeader('Content-Type', 'text/html')
  response.render("consumer/profile",{
    user: request.user,
    grade: grade,
    orderHistory: orderHistory,
    dietaryRestrictions: dietaryRestrictions,
    top3Meals: top3Meals
  });
});


router.post('/order', loggedIn, function(request, response){

  let menu = Consumer.getMenu();
  let day = request.body.day;
  let inyn = request.body.in;
  let outyn = request.body.out;
  let user = request.body.useremail;
  let order = [];

  if(outyn != "on"){
    let meal = request.body.mealyn;
    let side1 = request.body.side1yn;
    let side2 = request.body.side2yn;
    let dessert = request.body.dessertyn;


    let mealsel = "n/a";
    let side1sel = "n/a";
    let side2sel = "n/a";
    let dessertsel = "n/a";

    if(meal == "on"){
      mealsel = menu["meal"];
    }
    if(side1 == "on"){
      side1sel = menu["side1"];
    }
    if(side2 == "on"){
      side2sel = menu["side2"];
    }
    if(dessert == "on"){
      dessertsel = menu["dessert"];
    }

    order.push(mealsel);
    order.push(side1sel);
    order.push(side2sel);
    order.push(dessertsel);
    //Consumer.updateMealStats(order);
    //need to have login to save to a specific name in users and meal orders


    Consumer.updateWeekOrders(order,user, day);

    Consumer.updateUserHistory(order,user);
    Consumer.updateMealStats(order);
    //Consumer.updateTopMeals();
    response.status(200);
    response.setHeader('Content-Type', 'text/html')
    response.redirect("/orderingPage");
  }
});

module.exports = router;
