var request = require('supertest');
var server = require('../../server');
var uuid = require('node-uuid');
var should = require('should');

describe('GET /api/players',function(){
  it('responds with json',function(done){
    request(server)
      .get('/api/players')
      .expect('Content-Type',/json/)
      .expect(200)
      .end(function(err,res){
          should.not.exist(err);
          res.body.successful.should.equal(true);
          res.body.docs.should.be.an.array;
          done();
      });
  });
});


describe('POST /api/players',function(){
  it('creates a new player, responds with the id',function(done){
      var testUUID = uuid.v4();
      var player = {
          name : testUUID,
          email_address : testUUID + '@example.com',
          password : 'password1'
      };
    request(server)
      .post('/api/players')
      .send(player)
      .expect('Content-Type',/json/)
      .expect(200)
      .end(function(err,res){
          should.not.exist(err);
          res.body.successful.should.equal(true);
          res.body.doc.should.have.property('_id');
          done();
      });
  });
});

describe('POST /api/players/authenticate',function(){
    it('can login with valid credentials',function(done){
        var login_details = {
            "email_address" : "a2187c4a-7fb9-40ce-ab0c-f62c75903d43@example.com",
            "password" : 'password1'
        }
        request(server)
            .post('/api/players/authenticate')
            .send(login_details)
            .expect('Content-Type',/json/)
            .expect(200)
            .end(function(err,res){
                should.not.exist(err);
                res.body.successful.should.equal(true);
                res.body.should.have.property('auth_token');
                done();
            });
    });

    it('can not login with invalid credentials',function(done){
        var login_details = {
            "email_address" : "a2187c4a-7fb9-40ce-ab0c-f62c75903d43@example.com",
            "password" : ''
        }
        request(server)
            .post('/api/players/authenticate')
            .send(login_details)
            .expect('Content-Type',/json/)
            .expect(200)
            .end(function(err,res){
                should.not.exist(err);
                res.body.successful.should.equal(true);
                res.body.should.have.property('auth_token');
                done();
            });
    });
});
