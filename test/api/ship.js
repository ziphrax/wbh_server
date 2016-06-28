var request = require('supertest');
var server = require('../../server');
var uuid = require('node-uuid');
var should = require('should');

describe('GET /api/ships',function(){
    it('returns the json ship list',function(done){
    request(server)
        .get('/api/ships')
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
