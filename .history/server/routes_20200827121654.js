const cityRouter = require('./routes/cityRouter');

function routes(app) {
  app.use('/api/v1/characters/', charactersRouter);
}

module.exports = routes;