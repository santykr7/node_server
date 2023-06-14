const express = require('express')

const routers = express.Router();

const usersController = require('../controllers/users_controller')

routers.get('/profile',usersController.profile)

module.exports = routers;