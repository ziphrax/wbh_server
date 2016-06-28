var request = require('supertest');
var server = require('../../server');
var uuid = require('node-uuid');
var should = require('should');

describe('GET /api/technologies',function(){
    it('returns the json tech tree',function(done){
    request(server)
        .get('/api/technologies')
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
