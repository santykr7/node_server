const express = require('express');

const routers = express.Router();
const passport = require('passport');

const usersController = require('../controllers/users_controller');

routers.get('/profile/:id',passport.checkAuthentication ,usersController.profile);
routers.post('/update/:id',passport.checkAuthentication ,usersController.update);


routers.get('/sign-up', usersController.signUp);
routers.get('/sign-in', usersController.signIn);

routers.post('/create', usersController.create);

//use passport as authenticator
routers.post('/create-session',passport.authenticate(
    'local',    
    {failureRedirect: '/users/sign-in'},
    ) ,usersController.createSession);

routers.get('/sign-out', usersController.destroySession);

module.exports = routers;