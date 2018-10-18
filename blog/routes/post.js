var posts = [
    {title: 'title01', body: 'body01'},
    {title: 'title02', body: 'body02'},
    {title: 'title03', body: 'body03'}
];

exports.index = function(req, res){
    res.render('posts/index', {posts: posts});
};
exports.show = function(req, res){
    res.render('posts/show', {post: posts[req.params.id]});
};
exports.new = function(req, res){
    res.render('posts/new');
};
exports.edit = function(req, res){
    res.render('posts/edit', {post: posts[req.params.id],id: req.params.id});
};
exports.update = function(req, res, next){
    if(req.body.id !== req.params.id){
        next(new Error('ID not valid'));
    } else {
        posts[req.body.id] = {
            title: req.body.title,
            body: req.body.body
        };
        res.redirect('/');
    }
};
exports.create = function(req, res){
    var post = {
        title: req.body.title,
        body: req.body.body
    };
    posts.push(post);
    res.redirect('/');
};
exports.destroy = function(req, res, next){
    if(req.body.id !== req.params.id){
        next(new Error('ID not valid'));
    } else {
        posts.splice(req.params.id,1);
        res.redirect('/');
    }
};
