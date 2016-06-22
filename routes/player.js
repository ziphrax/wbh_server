var Router = require('express').Router();
var PlayerController = require('../controller/player');

Router.get('/',PlayerController.find);

module.exports = Router;
