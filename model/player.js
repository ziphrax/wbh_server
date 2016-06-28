var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var PlayerSchema = new Schema({
  name : String,
  email_address : String,
  created_date : Date,
  last_login : Date,
  salt : String,
  hashed_pass : String,
  password: String,
  researched_tech: [String]
});

module.exports = mongoose.model('Player',PlayerSchema);
