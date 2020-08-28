const express = require('express');

function middlewares(app) {
  app.use(express.json());
  app.use('/image', express.static(__dirname + '/images'));
  app.use('/', express.static(__dirname + '/../client/build'));
}

module.exports = middlewares;