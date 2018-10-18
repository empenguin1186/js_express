var express = require('express'),
    app = express(),
    post = require('./routes/post');

var logger = require('morgan');
var bodyParser = require('body-parser');
var connect = require('connect');
var methodOverride = require('method-override');

app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');

// middle ware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

app.use(logger('dev'));
app.use(express.static(__dirname + '/public'));
app.use(methodOverride('_method'));

// routing

app.get('/', post.index);
app.get('/posts/:id', post.show);

/*
app.get('/posts/new', post.new);
app.post('/posts/create', post.create);
app.get('/posts/:id/edit', post.show);
app.put('/posts/:id', post.update);
app.delete('/posts/:id', post.destroy);
*/

app.listen(3000);
console.log('server starting ...');
