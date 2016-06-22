var PlayerModel = function(data){
  var self = this;

  self.name = ko.observable(data.name);
  self.email_address = ko.observable(data.email_address);
  self.created_date = ko.observable(data.created_date);
  self.last_login = ko.observable(data.last_login);
  self.password = ko.observable(data.password);
  self.auth_token = ko.observable(data.auth_token);

  return self;

};
