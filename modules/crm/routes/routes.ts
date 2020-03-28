export {};

const express = require('express');
const Routes = express.Router();

// define the home page route
Routes.get('/crm', function(req, res) {
  res.render('home');
});

module.exports = Routes;
