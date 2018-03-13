const utils = require('./utils');
const expect = require('expect');


it('should add two numbers', ()=>{
    var res = utils.add(33, 11);

    expect(res).toBe(44).toBeA('number');
    
});

it('should square a number', (done) =>{
    utils.square(4,(square)=>{
        expect(square).toBe(16).toBeA('number');
        done();
    });
});

it('should return user object',()=>{

    var res = utils.setName({
        age:28,
        location:"Pune"
    }, "Vipin Sharma");

    expect(res).toInclude({firstName:"Vipin",lastName:"Sharma"});

});

it('should async add two numbers', (done)=>{
    utils.asynAdd(4,3, (sum)=>{
        expect(sum).toBe(7).toBeA('number');
        done();
    });
});