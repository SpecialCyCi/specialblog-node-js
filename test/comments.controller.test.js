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
      title: 'How to build a Blog with Node.js?',
      text:  'You should use some frameworks like Express'
    });

    article.save();
    comment = new Comment({
      email:   'specialcyci@gmail.com',
      content: 'Hello!'
    });
    done();
  });

  it('should create comment successfully.', function (done) {

  };

});
