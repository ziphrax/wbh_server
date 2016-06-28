var Router = require('express').Router();
var PlanetRoutes =  require('./routes/planet');
var PlayerRoutes =  require('./routes/player');
var ShipRoutes = require('./routes/ship');
var TechnologyRoutes = require('./routes/technology');

Router.use('/planets',PlanetRoutes);
Router.use('/players',PlayerRoutes);
Router.use('/ships',ShipRoutes);
Router.use('/technologies',TechnologyRoutes);

Router.get('/',function(req,res){
  res.json({successful:true,message:'Successfully connected to the api'});
});

module.exports = Router;
