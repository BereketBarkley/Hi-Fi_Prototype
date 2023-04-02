const express = require('express'),
  router = express.Router();

const Admin = require('../models/admin_model');

router.get('/consumerStats', function(request, response) {
    let topMeals = Admin.getTopMeals();
    let worstMeals = Admin.getWorstMeals();
    response.status(200);
    response.setHeader('Content-Type', 'text/html')
    response.render("admin/consumerStats",{
      topMeals: topMeals,
      worstMeals: worstMeals
    });
});

router.get('/dayBreakdown', function(request, response) {

    let monday = Admin.getMondayStats();
    let tuesday = Admin.getTuesdayStats();
    let wednesday = Admin.getWednesdayStats();
    let thursday = Admin.getThursdayStats();
    let friday = Admin.getFridayStats();
    response.status(200);
    response.setHeader('Content-Type', 'text/html')
    response.render("admin/dayBreakdown",{
      monday: monday,
      tuesday:tuesday,
      wednesday:wednesday,
      thursday:thursday,
      friday:friday
    });
});

router.get('/adminPage', function(request, response) {

    response.status(200);
    response.setHeader('Content-Type', 'text/html')
    response.render("admin/adminPage");
});

router.post('/refreshWeek', function(request, response){
    Admin.refreshWeek();
    response.status(200);
    response.setHeader('Content-Type', 'text/html')
    response.redirect('/adminPage');
});

router.post('/postMenu', function(request, response){

    let mealName = request.query.mealName;
    let side1 = request.query.side1;
    let side2 = request.query.side2;
    let dessert = request.query.dessert;
    Admin.setMenu();
    response.status(200);
    response.setHeader('Content-Type', 'text/html')
    response.redirect('/adminPage');
});

module.exports = router;
