const express = require('express');

const routers = express.Router();

const postsController = require('../controllers/posts_controller');

routers.post('/create', postsController.create);

module.exports = routers;