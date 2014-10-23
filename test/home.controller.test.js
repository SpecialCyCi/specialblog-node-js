var utils   = require('./utils')
  , request = require('supertest')
  , should  = require('should')
  , express = require('express');

var app = require('../app.js');

describe('GET /', function (argument) {
  it('should render successfully', function (done) {
    request(app)
      .get('/')
      .expect(200, function (err, res) {
        res.text.should.containEql('Special Blog');
        done(err);
      });
  });
});
