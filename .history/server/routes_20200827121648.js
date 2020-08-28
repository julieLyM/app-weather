const cityRouter = require('./routes/Router');

function routes(app) {
  app.use('/api/v1/characters/', charactersRouter);
}

module.exports = routes;