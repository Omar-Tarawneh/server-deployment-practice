'use strict';

const express = require('express');
const notFoundHandler = require('./error-handlers/404.js');
const errorHandler = require('./error-handlers/500.js');
const app = express();

app.get('/', (req, res) => {
  res.send('Hello :)');
});

app.get('/bad', (req, res) => {
  throw new Error('something went wrong');
});

app.use('*', notFoundHandler);
app.use(errorHandler);

/**
 * function that start the server on a specific PORT
 * @param {number} port
 * @example
 *      listen(3000)
 */
const listen = (port) => {
  app.listen(port, () => {
    console.log('The app is listening on the PORT: ', port);
  });
};

module.exports = {
  app: app,
  listen: listen,
};
