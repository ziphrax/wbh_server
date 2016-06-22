var Player = require('../model/player');

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
  }
}
