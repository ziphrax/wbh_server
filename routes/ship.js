var Router = require('express').Router();
var ShipsController = require('../controller/ship');

Router.get('/',ShipsController.get);

module.exports = Router;
