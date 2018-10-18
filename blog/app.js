var express = require('express'),
    app = express(),
    post = require('./routes/post');

var logger = require('morgan');
var bodyParser = require('body-parser');
var connect = require('connect');
var methodOverride = require('method-override');
var cookieParser = require('cookie-parser');
var expressSession = require('express-session');
var csrf = require('csurf');

app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');

// middle ware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

app.use(cookieParser());
app.use(expressSession({secret: 'fafeEF##lfeafe'}));
app.use(csrf());
app.use(function(req, res, next){
    res.locals.csrftoken = req.csrfToken();
    next();
});

app.use(logger('dev'));
app.use(express.static(__dirname + '/public'));
app.use(methodOverride('_method'));

// routing

app.get('/', post.index);
app.get('/posts/:id([0-9]+)', post.show);
app.get('/posts/new', post.new);
app.post('/posts/create', post.create);
app.delete('/posts/:id([0-9]+)', post.destroy);
app.get('/posts/:id([0-9]+)/edit', post.edit);
app.put('/posts/:id([0-9]+)', post.update);
app.use(function(err, req, res, next){
    res.send(err.message);
});

app.listen(3000);
console.log('server starting ...');
