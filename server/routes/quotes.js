var express = require('express');
var quotes_data = require('../modules/quotes-data.js');
var router = express.Router();

var routeCounter = 0;

router.get('/random', function(req, res){
    routeCounter++,
    console.log('someone made a request' , routeCounter , 'times');
    var randomNumber = Math.floor(Math.random() * quotes_data.length);
    res.send(quotes_data[randomNumber]);
});

router.get('/first', function(req, res){//('/first', function(req, res) - method
    res.send(quotes_data[0]);
});

router.get('/', function(req, res){//req, res - tied to express/ methods
    res.send("you can find quotes on /quote/random or /quote/first");//-function
});

router.get('/all', function(req, res){
    res.send(quotes_data);
})

router.post('/new', function(req, res){
    console.log('Taco, Taco');
    console.log('req.body in new quote post', req.body);
    quotes_data.push({quoteText: req.body.quote_to_add});
    res.sendStatus(200);
})

module.exports = router;