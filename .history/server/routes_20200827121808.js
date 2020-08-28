const cityRouter = require('./routes/cityRouter');


function routes(app) {
  app.use('/api/v1/city/', cityRouter);
}

module.exports = routes;
