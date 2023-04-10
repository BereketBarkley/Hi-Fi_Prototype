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


router.get('/createProfile', function(request, response) {
    response.status(200);
    response.setHeader('Content-Type', 'text/html')
    response.render("consumer/createProfile",{
      user: request.user,
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



router.post('/createProfile', function(request, response){

  let name = request.body.name;
  let grade = request.body.grade;

  Consumer.createProfile(name, grade);
    response.setHeader('Content-Type', 'text/html')
    response.redirect('/adminPage');



});

router.get('/profile', loggedIn, function(request, response) {
  let orderHistory = Consumer.getOrderHistory();
  let favoriteMeals = Consumer.getFavoriteMeals();
  let dietaryRestrictions = Consumer.getDietaryRestrictions();
  let personalDetails = Consumer.getPersonalDetails();

  response.status(200);
  response.setHeader('Content-Type', 'text/html')
  response.render("consumer/createProfile",{
    user: request.user,
    orderHistory: orderHistory,
    favoriteMeals: favoriteMeals,
    dietaryRestrictions: dietaryRestrictions,
    personalDetails: personalDetails
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
    //Consumer.updateTopMeals();
    response.status(200);
    response.setHeader('Content-Type', 'text/html')
    response.redirect("consumer/orderingPage");
  }
});

module.exports = router;
