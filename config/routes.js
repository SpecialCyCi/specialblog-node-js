module.exports = function(app){

  // home route
  var home = require('../app/controllers/home');
  app.get('/', home.index);

  // article routes
  var article = require('../app/controllers/api/articles');
  app.post('/api/article', article.create);

  // page not found
  app.use(function (req, res) {
    res.status(404).render('404', { title: '404' });
  });

};
