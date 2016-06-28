var Technology = require('../model/technology');

module.exports = {
  get: function(req, res) {
    res.json({
      successful: true,
      message: "returning players.",
      docs: Technology
    });
  }
}