const express = require('express');
const routers = express.Router();
const homeController = require('../controllers/home_controller');

console.log('routers is loaded');

routers.get('/',homeController.home);
routers.use('/users',require('./users'));


module.exports = routers;