var utils    = require('./utils')
  , request  = require('supertest')
  , should   = require('should')
  , express  = require('express')
  , mongoose = require('mongoose');

var app = require('../app.js');
var Article  = mongoose.model('Article');
var Comment  = mongoose.model('Comment');

describe('Comment API CURD tests', function (argument) {

  beforeEach(function (done) {
  
    article = new Article({
      title:   'How to build a Blog with Node.js?',
      content: 'You should use some frameworks like Express'
    });

    comment = new Comment({
      email:   'specialcyci@gmail.com',
      content: 'Hello!'
    });

    article.save( function (errors) {
      done();
    });
  });

  it('should create comment successfully.', function (done) {
    request(app)
      .post('/api/articles/' + article._id +  '/comments')
      .send(comment)
      .expect(200, function (errors, res) {
        res.body.email.should.match(comment.email);
        res.body.content.should.match(comment.content);
        res.body._article.should.match(article._id.toString());
        done();
      });
  });

  it('should not create comment if content is blank.', function (done) {
    comment.content = '';
    request(app)
      .post('/api/articles/' + article._id +  '/comments')
      .send(comment)
      .expect(200, function (errors, res) {
        should.exist(errors);
        (res.body.errors.content.message).should.match('Content cannot be blank.');
        done();
      });
  });

  it('should delete comment successfully', function (done) {
    comment.save(function (errors) {
      request(app)
        .delete('/api/comments/' + comment._id)
        .expect(200, function (errors, res) {
          res.body.email.should.match(comment.email);
          res.body.content.should.match(comment.content);
          done();
        });
    });
  });

  it('should update comment successfully', function (done) {
    comment.save();
    comment.content = 'Hello, I have updated this article!';
    request(app)
      .put('/api/comments/' + comment._id)
      .send(comment)
      .expect(200, function (errors, res) {
        res.body.email.should.match(comment.email);
        res.body.content.should.match(comment.content);
        done();
      });
  });

});
