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

  it('should create article successfully', function (done) {
    request(app)
      .post('/api/article')
      .send(article)
      .expect(200, function (errors, res) {
        res.body.title.should.match(article.title);
        res.body.text.should.match(article.text);
        done();
      });
  });

});
