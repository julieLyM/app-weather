const cityRouter = require('./routes/cityRouter');

function routes(app) {
  app.use('/api/v1/cityWeather/', cityRouter);
}

module.exports = routes;
