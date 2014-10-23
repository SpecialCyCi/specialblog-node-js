var mongoose = require('mongoose'),
  Article = mongoose.model('Article');

exports.create = function(req, res){
  var article = new Article({ title: req.params.title });
  article.save();
  res.render('index', { title: 'Generator-Express MVC' });
};
