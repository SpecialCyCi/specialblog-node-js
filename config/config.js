var path = require('path'),
    rootPath = path.normalize(__dirname + '/..'),
    env = process.env.NODE_ENV || 'development';

var config = {
  development: {
    root: rootPath,
    app: {
      name: 'specialblog-node-js'
    },
    port: 3000,
    db: 'mongodb://localhost/specialblog-node-js-development'
  },

  test: {
    root: rootPath,
    app: {
      name: 'specialblog-node-js'
    },
    port: 3000,
    db: 'mongodb://localhost/specialblog-node-js-test'
  },

  production: {
    root: rootPath,
    app: {
      name: 'specialblog-node-js'
    },
    port: 3000,
    db: 'mongodb://localhost/specialblog-node-js-production'
  }
};

module.exports = config[env];
