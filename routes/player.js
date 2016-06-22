var Router = require('express').Router();
var PlayerController = require('../controller/player');
var secure = require('../middleware/protected_route');

Router.get('/',secure,PlayerController.find);
Router.post('/',PlayerController.createPlayer);
Router.post('/authenticate',PlayerController.authenticate);

module.exports = Router;
