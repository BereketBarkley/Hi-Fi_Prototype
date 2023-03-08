const express = require('express'),
  router = express.Router();

const Consumer = require('../models/consumer_model');

router.get('/profile', function(request, response) {
  let orderHistory = Consumer.getOrderHistory();
  let favoriteMeals = Consumer.getFavoriteMeals();
  let dietaryRestrictions = Consumer.getDietaryRestrictions();
  let personalDetails = Consumer.getPersonalDetails();

  response.status(200);
  response.setHeader('Content-Type', 'text/html')
  response.render("views/consumer/profile",{
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
  response.render("views/consumer/orderingpage",{
    dietaryRestrictions: dietaryRestrictions,
    personalDetails: personalDetails
  });
});

router.post('/orderMonday', function(request, response){


  let mondayMeal = request.body.mondayMeal;
  let mondaySide1 = request.body.mondaySide1;
  let mondaySide2 = request.body.mondaySide2;
  let mondayDessert = request.body.mondayDessert;

  if(mondayMeal && mondaySide1 && mondaySide2 && mondayDessert){
    Consumer.orderMonday(mondayMeal, mondaySide1, mondaySide2, mondayDessert);
    response.status(200);
    response.setHeader('Content-Type', 'text/html')
    response.redirect("views/consumer/orderingpage");
  }
  else{
    response.redirect('/error?code=400');
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
    response.redirect("views/consumer/orderingpage");
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
    Consumer.orderwednesday(wednesdayMeal, wednesdaySide1, wednesdaySide2, wednesdayDessert);
    response.status(200);
    response.setHeader('Content-Type', 'text/html')
    response.redirect("views/consumer/orderingpage");
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
    Consumer.orderthursday(thursdayMeal, thursdaySide1, thursdaySide2, thursdayDessert);
    response.status(200);
    response.setHeader('Content-Type', 'text/html')
    response.redirect("views/consumer/orderingpage");
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
    Consumer.orderfriday(fridayMeal, fridaySide1, fridaySide2, fridayDessert);
    response.status(200);
    response.setHeader('Content-Type', 'text/html')
    response.redirect("views/consumer/orderingpage");
  }

  else{
    response.redirect('/error?code=400');
  }
});
