var mongoose = require('mongoose'),
  Article = mongoose.model('Article');

exports.create = function (req, res) {
  var article = new Article(req.body);
  article.save( function(error) {
    if (error) {
      res.status(400);
    } else {
      res.json(article);
    }
  });
};
