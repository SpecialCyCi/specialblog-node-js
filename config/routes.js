module.exports = function(app){

	// home route
	var home = require('../app/controllers/home');
	app.get('/', home.index);

 // article routes
  var article = require('../app/controllers/article');
  app.post('/api/article', article.create);

};
