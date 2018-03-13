module.exports.add = (a, b)=>{
    return a+b;
};

module.exports.asynAdd = (a, b, callback) =>{

    setTimeout(()=>{
        callback(a+b);
    }, 1000);
};

module.exports.square = (a,callback) =>{
    return callback(a*a);
};

module.exports.setName = (user, fullName) =>{

    let _fullName = fullName.split(' ');
    
    user.firstName = _fullName[0];
    user.lastName = _fullName[1];
    return user;
};