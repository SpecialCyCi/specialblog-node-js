var mongoose = require('mongoose'),
        Article = mongoose.model('Article'),
        Comment = mongoose.model('Comment')
        _ = require('lodash');

exports.create = function (req, res) {
  var comment = new Comment(req.body);
  comment._article = req.article._id;
  comment.save(function (errors) {
    if (errors) {
      res.status(400).json(errors);
    } else {
      res.json(comment);
    }
  });
};
