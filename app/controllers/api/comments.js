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

exports.delete = function (req, res) {
  var comment = req.comment;
  comment.remove(function (err) {
    if (err) {
      res.status(400).json(err);
    } else {
      res.json(comment);
    }
  });
};

exports.update = function (req, res) {
  var comment = req.comment;
  comment = _.extend(comment, req.body);
  comment.save(function (err) {
    if (err) {
      res.status(400).json(err);
    } else {
      res.json(comment);
    }
  })
};


// Comment middleware
exports.commentByID = function(req, res, next, id) {
  Comment.findById(id).exec(function(err, comment) {
    if (err) return next(err);
    if (!comment) return next(new Error('Failed to load comment' + id));
    req.comment = comment;
    next();
  });
};


