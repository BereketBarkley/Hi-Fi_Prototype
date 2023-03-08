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

router.post('/order', function(request, response){


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
