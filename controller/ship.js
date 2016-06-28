var Ship = require('../model/ship');

module.exports = {
  get: function(req, res) {
    res.json({
      successful: true,
      message: "returning players.",
      docs: Ship
    });
  }
}