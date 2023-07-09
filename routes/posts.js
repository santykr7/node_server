const express = require('express');
const passport = require('passport')

const routers = express.Router();

const postsController = require('../controllers/posts_controller');

routers.post('/create', passport.checkAuthentication, postsController.create);
routers.get('/destroy/:id',passport.checkAuthentication, postsController.destroy);

module.exports = routers;   