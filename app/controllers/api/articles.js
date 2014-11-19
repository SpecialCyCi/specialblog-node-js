var mongoose = require('mongoose'),
        Article = mongoose.model('Article'),
        _ = require('lodash');

exports.index = function (req, res) {
  var perPage = 10, page = Math.max(1, req.param('page'));
  Article.find()
         .limit(perPage)
         .skip(perPage * ( page - 1 ))
         .exec(function(err, articles) {
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

exports.update = function (req, res) {
  var article = req.article;
  article = _.extend(article, req.body);
  article.save(function (err) {
    if (err) {
      res.status(400).json(err);
    } else {
      res.json(article);
    }
  })
};

exports.delete = function (req, res) {
  var article = req.article;
  article.remove(function (err) {
    if (err) {
      res.status(400).json(err);
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


