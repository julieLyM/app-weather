const cityRouter = require('./routes/cityRouter');

app.get('/', (req, res) => {
  res.send('test');
});
function routes(app) {
  app.use('/api/v1/city/', cityRouter);
}

module.exports = routes;
