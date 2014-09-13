

module.exports.encode = function(str) {

    return new Buffer(str).toString('base64');
}


module.exports.decode = function(str) {

    return new Buffer(afterBase64, 'base64').toString();
}

module.exports.compare = function(str, hash) {

    if (typeof str  !== 'string' || str  === '' ||
        typeof hash !== 'string' || hash === '') {
    
        return false;
    }
    
    return new Buffer(str).toString('base64') === hash;
    
}
