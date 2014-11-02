module.exports = function(app){

  // home route
  var home = require('../app/controllers/home');
  app.get('/', home.index);

  // articles routes
  var articles = require('../app/controllers/api/articles');
  app.route('/api/articles')
     .get(articles.index)
     .post(articles.create);

  app.route('/api/articles/:articleId')
     .get(articles.show)
     .put(articles.update)
     .delete(articles.delete);

  // comments routes
  var comments = require('../app/controllers/api/comments');
  app.route('/api/articles/:articleId/comments')
     .post(comments.create);

  app.route('/api/comments/:commentId')
     .put(comments.update)
     .delete(comments.delete);

   // Finish by binding the article middleware
  app.param('articleId', articles.articleByID);

  // Finish by binding the comment middleware
  app.param('commentId', comments.commentByID);

 // page not found
  app.use(function (req, res) {
    res.status(404).render('404', { title: '404' });
  });

};
