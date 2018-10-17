var express = require('express'),
    app = express(),
    post = require('./routes/post');

var logger = require('morgan');
var bodyParser = require('body-parser');

app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');

// middle ware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

app.use(logger('dev'));
app.use(express.static(__dirname + '/public'));

// routing

app.get('/new', function(req, res) {
    res.render('new');
});

app.listen(3000);
console.log('server starting ...');
