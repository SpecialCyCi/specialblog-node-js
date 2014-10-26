var mongoose = require('mongoose'),
  Article = mongoose.model('Article');

// TODO: with page params.
exports.index = function (req, res) {
  Article.find().exec(function(err, articles) {
    res.json(articles);
  });
};

exports.show = function (req, res) {
  res.json(req.article);
}

exports.create = function (req, res) {
  var article = new Article(req.body);
  article.save( function(errors) {
    if (errors) {
      res.status(400).json(errors);
    } else {
      res.json(article);
    }
  });
};

// Article middleware
exports.articleByID = function(req, res, next, id) {
  Article.findById(id).exec(function(err, article) {
    if (err) return next(err);
    if (!article) return next(new Error('Failed to load article' + id));
    req.article = article;
    next();
  });
};


