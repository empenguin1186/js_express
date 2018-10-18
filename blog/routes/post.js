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
