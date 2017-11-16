var express = require('express');
var router = express.Router();//constructor function, returning router(which is an object and function) - 
//is going to be just a piece of an application

router.get('/really-great', function(req, res){
    res.send('This is a great string');
});

module.exports = router;