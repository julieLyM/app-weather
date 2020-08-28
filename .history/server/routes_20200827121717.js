const cityRouter = require('./routes/cityRouter');

function routes(app) {
  app.use('/api/v1/cit/', cityRouter);
}

module.exports = routes;
