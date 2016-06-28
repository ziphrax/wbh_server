var Router = require('express').Router();
var PlanetController = require('../controller/planet');

Router.get('/generate',PlanetController.generate);

module.exports = Router;
