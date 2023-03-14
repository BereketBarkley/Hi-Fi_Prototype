const express = require('express'),
  router = express.Router();

const Admin = require('../models/consumer_model');

router.get('/consumerStats', function(request, response) {
    let topMeals = Admin.getTopMeals();
    let worstMeals = Admin.getWorstMeals();
    response.status(200);
    response.setHeader('Content-Type', 'text/html')
    response.render("views/admin/consumerStats",{
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
    response.render("views/admin/dayBreakdown",{
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
    response.render("views/admin/adminPage");
});

router.post('/refreshWeek', function(request, response){
    Admin.refreshWeek();
    response.status(200);
    response.setHeader('Content-Type', 'text/html')
    response.redirect('/adminPage');
});

module.exports = router;
