var mongoose = require('mongoose'),
  Article = mongoose.model('Article');

// TODO: with page params.
exports.index = function (req, res) {
  Article.find().exec(function(err, articles) {
    res.json(articles);
  });
};

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
