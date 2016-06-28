var Router = require('express').Router();
var TechnologyController = require('../controller/technology');

Router.get('/',TechnologyController.get);

module.exports = Router;
