const app = require('../server');
const request = require('supertest');
const expect = require('expect');

it('should return hello world response',(done)=>{
    request(app)
    .get('/')
    .expect((res)=>{
        expect(res.body).toInclude({pageTitle:'Home'})
    })
    .end(done);
});