var utils   = require('./utils')
  , request = require('supertest')
  , express = require('express');

var app = require('../app.js');

describe('GET /', function (argument) {
  it('should render successfully', function (done) {
    request(app)
      .get('/')
      .expect(200, done);
  });
});
