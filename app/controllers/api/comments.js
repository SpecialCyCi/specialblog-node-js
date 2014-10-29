var mongoose = require('mongoose'),
        Article = mongoose.model('Article'),
        Comment = mongoose.model('Comment')
        _ = require('lodash');

// Article middleware
exports.articleByID = function(req, res, next, id) {
  Article.findById(id).exec(function(err, article) {
    if (err) return next(err);
    if (!article) return next(new Error('Failed to load article' + id));
    req.article = article;
    next();
  });
};
