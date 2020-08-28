const cityRouter = require('./routes/cityRouter');

function routes(app) {
  app.use('/api/v1/cities/', cityRouter);
}

module.exports = routes;
