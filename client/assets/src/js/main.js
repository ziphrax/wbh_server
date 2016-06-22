var wbh_ViewModel = function(){
  var self = this;

  self.currentPlayer = ko.observable();

  self.init = function(){
    self.currentPlayer(new PlayerModel({
      name:"",
      email_address:"",
      created_date:"",
      last_login:"",
      auth_token:"",
      password:""
    }));
  };

  self.init();

}

ko.applyBindings(new wbh_ViewModel());

console.log('wbh_client started');
