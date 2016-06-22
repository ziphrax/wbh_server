var request = require('supertest');
var server = require('../../server');

describe('GET /api/players',function(){
  it('responds with json',function(done){
    request(server)
      .get('/api/players')
      .expect('Content-Type',/json/)
      .expect(200,done);
  });
});
