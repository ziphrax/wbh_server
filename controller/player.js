var Player = require('../model/player')
var jwt = require('jsonwebtoken');
var uuid = require('node-uuid');
var config = require('../config');
var bcrypt = require('bcrypt-nodejs');

module.exports = {
  find : function(req,res){
    var query = req.query.query || req.params.query || {};
    var sort = req.query.sort || req.params.sort || {};
    var skip = req.query.skip || req.params.skip || 0;
    var limit = req.query.limit || req.params.limit || 10;

    Player.find(query)
          .sort(sort)
          .limit(limit)
          .skip(skip)
          .exec(function(err,docs){
            Player.find(query).count().exec(function(err,count){
              if(err) {
                  res.json({successful:false,message:err.message});
              }
              res.json({
                successful:true,
                message:"returning players.",
                count:count,
                limit:limit,
                skip:skip,
                docs:docs
              });
            });
          });
  },
  createPlayer: function(req,res){
      req.body.salt = uuid.v4();;
      var hash = bcrypt.hashSync( req.body.password + req.body.salt );
      req.body.hashed_pass = hash;
      delete req.body.password;

      var player = new Player(req.body);

      player.save(function(err,doc){
          if(err) {
              res.json({successful:false,message:err.message});
          }
          res.json({
            successful:true,
            message:"created new player",
            doc:doc
          });
      });
  },
  authenticate: function(req,res){
      var email = req.query.email || req.params.email;
      var password = req.query.password || req.params.password;
      Player.find({email:email,password:password}).exec(function(err,docs){
          if(err) {
              res.json({successful:false,message:err.message});
          }
          if(docs.length == 0){
              res.json({successful:false,message:"Invalid Credentials"});
          }else {
              var token = jwt.sign(docs[0],config.jwt_secret)
              res.json({
                successful:true,
                message:"authenticated success",
                doc:docs[0],
                auth_token:token
              });
          }

      });
  }
}
