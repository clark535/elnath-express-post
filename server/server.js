var express = require('express');
var bodyParser = require('body-parser');
var app = express();
var quotesData = require('./modules/quotes-data.js');
var reallyGreat = require('./routes/really-great.js');
var quotes = require('./routes/quotes.js');
var port = 5000;

console.log('starting up the server');

app.use(express.static('server/public'));
app.use(bodyParser.urlencoded({extended: true}));

app.get('/really-great', reallyGreat);

app.use('/quote', quotes);

app.use('/dinosaur', function(req, res){
    res.send('Roar!');
})

app.listen(port, function(){
    console.log('listening on port', port);
});

