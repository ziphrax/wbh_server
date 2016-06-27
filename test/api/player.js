var request = require('supertest');
var server = require('../../server');
var uuid = require('node-uuid');
var should = require('should');

describe('GET /api/players',function(){
  it('protected route responds with json',function(done){
    request(server)
      .get('/api/players')
      .set('x-access-token', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyIkX18iOnsic3RyaWN0TW9kZSI6dHJ1ZSwiZ2V0dGVycyI6e30sIndhc1BvcHVsYXRlZCI6ZmFsc2UsImFjdGl2ZVBhdGhzIjp7InBhdGhzIjp7Il9fdiI6ImluaXQiLCJoYXNoZWRfcGFzcyI6ImluaXQiLCJzYWx0IjoiaW5pdCIsImVtYWlsX2FkZHJlc3MiOiJpbml0IiwibmFtZSI6ImluaXQiLCJfaWQiOiJpbml0In0sInN0YXRlcyI6eyJpZ25vcmUiOnt9LCJkZWZhdWx0Ijp7fSwiaW5pdCI6eyJfX3YiOnRydWUsImhhc2hlZF9wYXNzIjp0cnVlLCJzYWx0Ijp0cnVlLCJlbWFpbF9hZGRyZXNzIjp0cnVlLCJuYW1lIjp0cnVlLCJfaWQiOnRydWV9LCJtb2RpZnkiOnt9LCJyZXF1aXJlIjp7fX0sInN0YXRlTmFtZXMiOlsicmVxdWlyZSIsIm1vZGlmeSIsImluaXQiLCJkZWZhdWx0IiwiaWdub3JlIl19LCJlbWl0dGVyIjp7ImRvbWFpbiI6bnVsbCwiX2V2ZW50cyI6e30sIl9ldmVudHNDb3VudCI6MCwiX21heExpc3RlbmVycyI6MH19LCJpc05ldyI6ZmFsc2UsIl9kb2MiOnsiX192IjowLCJoYXNoZWRfcGFzcyI6IiQyYSQxMCR3NDBtWmlMeUlBNmR3Q0djbGkycGUueVF2eUh5aG9IeDZlbUY2bmJoUWREZ0pYRWdidS50ZSIsInNhbHQiOiIkMmEkMTAkdzQwbVppTHlJQTZkd0NHY2xpMnBlLiIsImVtYWlsX2FkZHJlc3MiOiJmYjIwMzg3NS1mMGY2LTQxMGEtYWI5ZS03Y2ZiNDA3MmY1OWZAZXhhbXBsZS5jb20iLCJuYW1lIjoiZmIyMDM4NzUtZjBmNi00MTBhLWFiOWUtN2NmYjQwNzJmNTlmIiwiX2lkIjoiNTc2YWVhZGJlZmM5NWM4OGUxZjI1OTZkIn0sIl9wcmVzIjp7IiRfX29yaWdpbmFsX3NhdmUiOltudWxsLG51bGxdLCIkX19vcmlnaW5hbF9yZW1vdmUiOltudWxsXX0sIl9wb3N0cyI6eyIkX19vcmlnaW5hbF9zYXZlIjpbXSwiJF9fb3JpZ2luYWxfcmVtb3ZlIjpbXX0sImlhdCI6MTQ2NjYyNDgyMn0.B8cVhaGRIvl3wzOV5dJ-a3UmfV8R5PVlHr15vqUJpb4')
      .expect('Content-Type',/json/)
      .expect(200)
      .end(function(err,res){
          should.not.exist(err);
          res.body.successful.should.equal(true);
          res.body.docs.should.be.an.array;
          done();
      });
  });
  it('protected route fails without token',function(done){
    request(server)
      .get('/api/players')
      .expect('Content-Type',/json/)
      .expect(403)
      .end(function(err,res){
          should.not.exist(err);
          res.body.successful.should.equal(false);
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
            "email_address" : "fb203875-f0f6-410a-ab9e-7cfb4072f59f@example.com",
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

    it('can not login with invalid email address',function(done){
        var login_details = {
            "email_address" : "a2187c4a-7fb9-40ce-ab0c-f62c75903d43@example.comx",
            "password" : 'password1'
        }
        request(server)
            .post('/api/players/authenticate')
            .send(login_details)
            .expect('Content-Type',/json/)
            .expect(200)
            .end(function(err,res){
                should.not.exist(err);
                res.body.successful.should.equal(false);
                res.body.should.not.have.property('auth_token');
                done();
            });
    });

    it('can not login with invalid password',function(done){
        var login_details = {
            "email_address" : "dd61d69b-e0ce-44d9-a434-2b6b9013427a@example.com",
            "password" : 'xxx'
        }
        request(server)
            .post('/api/players/authenticate')
            .send(login_details)
            .expect('Content-Type',/json/)
            .expect(200)
            .end(function(err,res){
                should.not.exist(err);
                res.body.successful.should.equal(false);
                res.body.should.not.have.property('auth_token');
                done();
            });
    });
});
