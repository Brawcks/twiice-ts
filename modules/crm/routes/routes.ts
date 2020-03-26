export {};

const express = require('express');
const Routes = express.Router();

// define the home page route
Routes.get('/crm', function(req, res) {
  res.send('<h1>Crm Homepage</h1>');
});
// define the about route
Routes.get('/crm/about', function(req, res) {
  res.send('<h1>Crm about page</h1>');
});

Routes.get('/test', function(req, res) {
  res.render('layout');
});

module.exports = Routes;
