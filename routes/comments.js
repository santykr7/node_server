const express = require('express');
const routers = express.Router();
const passport = require('passport')



const commentsController = require('../controllers/comments_controller');

routers.post('/create',passport.checkAuthentication, commentsController.create);
routers.get('/destroy/:id',passport.checkAuthentication, commentsController.destroy);

module.exports = routers;

