var Router = require('express').Router();
var TechnologyController = require('../controller/technology');
var Secure = require('../middleware/protected_route');
Router.get('/',TechnologyController.get);
Router.post('/research/:id',Secure,TechnologyController.research);

module.exports = Router;
