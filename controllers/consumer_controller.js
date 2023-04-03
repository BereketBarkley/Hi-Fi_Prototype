const express = require('express'),
  router = express.Router();

const Consumer = require('../models/consumer_model');

router.get('/createProfile', function(request, response) {
    response.status(200);
    response.setHeader('Content-Type', 'text/html')
    response.render("consumer/createProfile");
});


router.get('/orderingPage', function(request, response) {
    let menu = Consumer.getMenu();

    response.status(200);
    response.setHeader('Content-Type', 'text/html')
    response.render("consumer/orderingPage",{
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

router.get('/profile', function(request, response) {
  let orderHistory = Consumer.getOrderHistory();
  let favoriteMeals = Consumer.getFavoriteMeals();
  let dietaryRestrictions = Consumer.getDietaryRestrictions();
  let personalDetails = Consumer.getPersonalDetails();

  response.status(200);
  response.setHeader('Content-Type', 'text/html')
  response.render("consumer/createProfile",{
    orderHistory: orderHistory,
    favoriteMeals: favoriteMeals,
    dietaryRestrictions: dietaryRestrictions,
    personalDetails: personalDetails
  });
});

router.get('/order', function(request, response){
  let dietaryRestrictions = Consumer.getDietaryRestrictions();
  let personalDetails = Consumer.getPersonalDetails();

  response.status(200);
  response.setHeader('Content-Type', 'text/html')
  response.render("consumer/orderingPage",{
    dietaryRestrictions: dietaryRestrictions,
    personalDetails: personalDetails
  });
});

router.post('/orderMonday', function(request, response){

  let menu = Consumer.getMenu();
  let day = request.body.day;
  let inyn = request.body.in;
  let outyn = request.body.out;
  let order = [];

  if(outyn != "on"){
    let meal = request.body.mealyn;
    let side1 = request.body.side1yn;
    let side2 = request.body.side2yn;
    let dessert = request.body.dessert;

    let mealsel = "n/a";
    let side1sel = "n/a";
    let side2sel = "n/a";
    let dessertsel = "n/a";

    if(meal == "on"){
      melsel = menu["meal"];
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

    order.push(melsel);
    order.push(side1sel);
    order.push(side2sel);
    order.push(dessertsel);
    Consumer.updateMealStats(order);
    //need to have login to save to a specific name in users and meal orders
    Consumer.updateUserHistory();
    Consumer.updateWeekOrders();
    response.status(200);
    response.setHeader('Content-Type', 'text/html')
    response.redirect("consumer/orderingPage");
  }
});

  router.post('/orderTuesday', function(request, response){

  let tuesdayMeal = request.body.tuesdayMeal;
  let tuesdaySide1 = request.body.tuesdaySide1;
  let tuesdaySide2 = request.body.tuesdaySide2;
  let tuesdayDessert = request.body.tuesdayDessert;

  if(tuesdayMeal && tuesdaySide1 && tuesdaySide2 && tuesdayDessert){
    Consumer.orderTuesday(tuesdayMeal, tuesdaySide1, tuesdaySide2, tuesdayDessert);
    response.status(200);
    response.setHeader('Content-Type', 'text/html')
    response.redirect("consumer/orderingPage");
  }
  else{
    response.redirect('/error?code=400');
  }
});

  router.post('/orderWednesday', function(request, response){

  let wednesdayMeal = request.body.wednesdayMeal;
  let wednesdaySide1 = request.body.wednesdaySide1;
  let wednesdaySide2 = request.body.wednesdaySide2;
  let wednesdayDessert = request.body.wednesdayDessert;

  if(wednesdayMeal && wednesdaySide1 && wednesdaySide2 && wednesdayDessert){
    Consumer.orderWednesday(wednesdayMeal, wednesdaySide1, wednesdaySide2, wednesdayDessert);
    response.status(200);
    response.setHeader('Content-Type', 'text/html')
    response.redirect("consumer/orderingPage");
  }
  else{
    response.redirect('/error?code=400');
  }
});

  router.post('/orderThursday', function(request, response){

  let thursdayMeal = request.body.thursdayMeal;
  let thursdaySide1 = request.body.thursdaySide1;
  let thursdaySide2 = request.body.thursdaySide2;
  let thursdayDessert = request.body.thursdayDessert;

  if(thursdayMeal && thursdaySide1 && thursdaySide2 && thursdayDessert){
    Consumer.orderThursday(thursdayMeal, thursdaySide1, thursdaySide2, thursdayDessert);
    response.status(200);
    response.setHeader('Content-Type', 'text/html')
    response.redirect("consumer/orderingPage");
  }
  else{
    response.redirect('/error?code=400');
  }
});

  router.post('/orderFrday', function(request, response){

  let fridayMeal = request.body.fridayMeal;
  let fridaySide1 = request.body.fridaySide1;
  let fridaySide2 = request.body.fridaySide2;
  let fridayDessert = request.body.fridayDessert;

  if(fridayMeal && fridaySide1 && fridaySide2 && fridayDessert){
    Consumer.orderFriday(fridayMeal, fridaySide1, fridaySide2, fridayDessert);
    response.status(200);
    response.setHeader('Content-Type', 'text/html')
    response.redirect("consumer/orderingPage");
  }

  else{
    response.redirect('/error?code=400');
  }
});

module.exports = router;
