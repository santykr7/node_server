const express = require('express');

const routers = express.Router();

const usersController = require('../controllers/users_controller');

routers.get('/profile',usersController.profile);
routers.get('/sign-up',usersController.signUp);
routers.get('/sign-in',usersController.signIn);

routers.post('/create',usersController.create);
routers.post('/create-session',usersController.createSession);

module.exports = routers;