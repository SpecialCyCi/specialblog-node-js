var mongoose = require('mongoose'),
  Article = mongoose.model('Article');

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
