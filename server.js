var express = require('express'),
    app = express(),
    port = 3000,
    mongoose = require('mongoose'),
    config = require('./config'),
    api_routes = require('./api_routes'),
    bodyParser = require('body-parser');

mongoose.connect(config.mongoose_uri,function(err){
  if(err){
    console.log('Error Occured',err);
  } else {
    //console.log('Mongodb connected');
  }
});

app.use(bodyParser.json());

app.use('/api',api_routes);
app.use(express.static('client'));

var server = app.listen(port,function(){
  //console.log('wbh server running on port %s', port);
});

module.exports = server;
