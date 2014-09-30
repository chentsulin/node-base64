
module.exports.encode = function(str) {

    if (typeof str  !== 'string' || str  === '') {

        throw new TypeError('parameter is not a vaild string');
    }

    return new Buffer(str).toString('base64');
}


module.exports.decode = function(hash) {

    if (typeof hash !== 'string' || hash === '') {

        throw new TypeError('parameter is not a vaild string');
    }

    return new Buffer(hash, 'base64').toString();
}

module.exports.compare = function(str, hash) {

    if (typeof str  !== 'string' || str  === '' ||
        typeof hash !== 'string' || hash === '') {

        return false;
    }

    return (new Buffer(str).toString('base64')) === hash;

}
