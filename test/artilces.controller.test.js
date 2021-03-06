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
      title:   'How to build a Blog with Node.js?',
      content: 'You should use some frameworks like Express'
    });

    done();
  });

  it('should list articles', function (done) {
    var articlesCount = 10, articlesIndex = 10, doneCount = 0;
    while( articlesIndex-- ) {
      new Article({
        title: articlesIndex + ' Another Article Title'
      }).save(function (error, saved) {
        if ( error ) throw error;
        if ( ( ++doneCount ) == articlesCount ) {
          afterSaveAll();
        }
      });
    }
    function afterSaveAll(){
      request(app)
      .get('/api/articles')
      .expect(200, function (errors, res) {
        (res.body.length).should.match(articlesCount);
        done();
      });
    }
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
        res.body.content.should.match(article.content);
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

  it('should delete an article successfully', function (done) {
    article.save();
    request(app)
      .delete('/api/articles/' + article._id)
      .expect(200, function (errors, res) {
        (res.req.method).should.match('DELETE');
        (res.body.title).should.match(article.title);
        done();
      });
  });

  it('should update an article successfully', function (done) {
    article.save();
    article.title = 'new title';
    request(app)
      .put('/api/articles/' + article._id)
      .send(article)
      .expect(200, function (errors, res) {
        res.body._id.should.equal(article._id.toString());
        res.body.title.should.equal('new title');
        done();
      });
  });

});
