var Router = require('express').Router();
var PlayerController = require('../controller/player');

Router.get('/',PlayerController.find);
Router.post('/',PlayerController.createPlayer);
Router.post('/authenticate',PlayerController.authenticate);

module.exports = Router;
