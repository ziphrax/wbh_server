var request = require('supertest');
var server = require('../../server');
var uuid = require('node-uuid');
var should = require('should');

describe('GET /api/planets/generate',function(){
    it('returns a new planet as json',function(done){
    request(server)
        .get('/api/planets/generate')
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
