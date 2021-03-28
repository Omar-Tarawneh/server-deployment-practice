'use strict';

module.exports = (err, req, res, next) => {
  res.status(500);
  res.message = 'Internal Server Erro';
  res.json({
    error: err.message,
  });
};
