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

describe('POST /api/technologies/research/:id',function(){
    it('returns a success message and adds that technology to the players list of researched tech',function(done){
        request(server)            
            .post('/api/technologies/research/Short Range Lasers')
            .set('x-access-token', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyIkX18iOnsic3RyaWN0TW9kZSI6dHJ1ZSwiZ2V0dGVycyI6e30sIndhc1BvcHVsYXRlZCI6ZmFsc2UsImFjdGl2ZVBhdGhzIjp7InBhdGhzIjp7Il9fdiI6ImluaXQiLCJoYXNoZWRfcGFzcyI6ImluaXQiLCJzYWx0IjoiaW5pdCIsImVtYWlsX2FkZHJlc3MiOiJpbml0IiwibmFtZSI6ImluaXQiLCJfaWQiOiJpbml0In0sInN0YXRlcyI6eyJpZ25vcmUiOnt9LCJkZWZhdWx0Ijp7fSwiaW5pdCI6eyJfX3YiOnRydWUsImhhc2hlZF9wYXNzIjp0cnVlLCJzYWx0Ijp0cnVlLCJlbWFpbF9hZGRyZXNzIjp0cnVlLCJuYW1lIjp0cnVlLCJfaWQiOnRydWV9LCJtb2RpZnkiOnt9LCJyZXF1aXJlIjp7fX0sInN0YXRlTmFtZXMiOlsicmVxdWlyZSIsIm1vZGlmeSIsImluaXQiLCJkZWZhdWx0IiwiaWdub3JlIl19LCJlbWl0dGVyIjp7ImRvbWFpbiI6bnVsbCwiX2V2ZW50cyI6e30sIl9ldmVudHNDb3VudCI6MCwiX21heExpc3RlbmVycyI6MH19LCJpc05ldyI6ZmFsc2UsIl9kb2MiOnsiX192IjowLCJoYXNoZWRfcGFzcyI6IiQyYSQxMCR3NDBtWmlMeUlBNmR3Q0djbGkycGUueVF2eUh5aG9IeDZlbUY2bmJoUWREZ0pYRWdidS50ZSIsInNhbHQiOiIkMmEkMTAkdzQwbVppTHlJQTZkd0NHY2xpMnBlLiIsImVtYWlsX2FkZHJlc3MiOiJmYjIwMzg3NS1mMGY2LTQxMGEtYWI5ZS03Y2ZiNDA3MmY1OWZAZXhhbXBsZS5jb20iLCJuYW1lIjoiZmIyMDM4NzUtZjBmNi00MTBhLWFiOWUtN2NmYjQwNzJmNTlmIiwiX2lkIjoiNTc2YWVhZGJlZmM5NWM4OGUxZjI1OTZkIn0sIl9wcmVzIjp7IiRfX29yaWdpbmFsX3NhdmUiOltudWxsLG51bGxdLCIkX19vcmlnaW5hbF9yZW1vdmUiOltudWxsXX0sIl9wb3N0cyI6eyIkX19vcmlnaW5hbF9zYXZlIjpbXSwiJF9fb3JpZ2luYWxfcmVtb3ZlIjpbXX0sImlhdCI6MTQ2NjYyNDgyMn0.B8cVhaGRIvl3wzOV5dJ-a3UmfV8R5PVlHr15vqUJpb4')
            .expect('Content-Type',/json/)
            .expect(200)
            .end(function(err,res){
                should.not.exist(err);
                res.body.successful.should.equal(true);
                done();
            });
    });
});
