const express = require('express'),
  router = express.Router();

const Staff = require('../models/staff_model');

function loggedIn(request, response, next) {
  if (request.user) {
    next();
  } else {
    response.redirect('/login');
  }
}

router.get('/orderFulfillment', function(request, response) {
    let menu = Staff.getMenu();
    let mealsOrdered = Staff.countMeals();
    let side1Ordered = Staff.countSide1();
    let side2Ordered = Staff.countSide2();
    let dessertOrdered = Staff.countDessert();
    let orderList = Staff.getOrderList();

    response.status(200);
    response.setHeader('Content-Type', 'text/html')
    response.render("staff/orderFulfillment",{
      menu: menu,
      mealsOrdered: mealsOrdered,
      side1Ordered: side1Ordered,
      side2Ordered: side2Ordered,
      dessertOrdered: dessertOrdered,
      orderList:orderList
    });
});

module.exports = router;
