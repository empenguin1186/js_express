var express = require('express'),
    app = express();
var logger = require('morgan');
var bodyParser = require('body-parser');

app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');

// middle ware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

app.use(logger('dev'));
app.use(express.static(__dirname + '/public'));

app.param('id', function(req, res, next, id) {
    var users = ['hoge', 'foge', 'saba'];
    req.params.name = users[id];
    next();
});
app.get('/new', function(req, res) {
    res.render('new');
});

app.post('/create', function(req, res) {
    res.send(req.body.name);
});

app.listen(3000);
console.log('server starting ...');
