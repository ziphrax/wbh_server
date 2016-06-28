var Router = require('express').Router();
var PlayerRoutes =  require('./routes/player');
var TechnologyRoutes = require('./routes/technology');

Router.use('/players',PlayerRoutes);
Router.use('/technologies',TechnologyRoutes);

Router.get('/',function(req,res){
  res.json({successful:true,message:'Successfully connected to the api'});
});

module.exports = Router;
