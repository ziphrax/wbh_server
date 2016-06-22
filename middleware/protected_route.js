var router = require('express').Router();
var config = require('../config');
var jwt = require('jsonwebtoken');

router.use(function(req,res,next){
    var token = req.body.token || req.query.token || req.headers['x-access-token'];

    // decode token
    if (token) {
        jwt.verify(token, config.jwt_secret, function(err, decoded) {
            if (err) {
                return res.json({ successful: false, message: err.message });
            } else {
                req.decoded = decoded;
                next();
            }
        });

    } else {
        return res.status(403).send({
            success: false,
            message: 'No token provided.'
        });
    }
});

module.exports = router;
