var Router = require('express').Router();
var PlayerRoutes =  require('./routes/player');

Router.use('/players',PlayerRoutes);

Router.get('/',function(req,res){
  res.json({successful:true,message:'Successfully connected to the api'});
});

module.exports = Router;
