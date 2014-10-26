var utils    = require('./utils')
  , request  = require('supertest')
  , should   = require('should')
  , express  = require('express')
  , mongoose = require('mongoose');

var app = require('../app.js');
var Article  = mongoose.model('Article');

describe('Article API CURD tests', function (argument) {

  beforeEach(function (done) {
  
    article = new Article({
      title: 'How to build a Blog with Node.js?',
      text:  'You should use some frameworks like Express'
    });

    done();
  });

  it('should list articles', function (done) {
    var articlesCount = 10, articlesIndex = 10;
    while(articlesIndex -- ){
      var _article = new Article({
        title: articlesIndex + 'Another Article Title',
      });
      _article.save();
    }
    request(app)
      .get('/api/articles')
      .expect(200, function (errors, res) {
        (res.body.length).should.be.equal(articlesCount);
        done();
      });
  });

  it('should show an article successfully', function (done) {
    article.save();
    request(app)
      .get('/api/articles/' + article._id)
      .expect(200, function (errors, res) {
        res.body.title.should.match(article.title);
        done();
      });
  });

  it('should create an article successfully', function (done) {
    request(app)
      .post('/api/articles')
      .send(article)
      .expect(200, function (errors, res) {
        res.body.title.should.match(article.title);
        res.body.text.should.match(article.text);
        done();
      });
  });

  it('should not create an article if no title is provided', function (done) {
    article.title = '';
    request(app)
      .post('/api/articles')
      .send(article)
      .expect(200, function (errors, res) {
        should.exist(errors);
        (res.body.errors.title.message).should.match('Title cannot be blank.');
        done();
      });
  });

});
