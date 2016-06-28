var Technology = require('../model/technology');

module.exports = {
  get: function(req, res) {
        res.json({
          successful: true,
          message: "returning players.",
          docs: Technology
        });
    },
    research: function(req,res){
        res.json({
          successful: true,
          message: "Successfully researched: "  + req.params.id        
        });
    }
}
