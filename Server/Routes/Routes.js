const Express = require('express');
const app = Express();
app.use(require('./Categoria'));
module.exports = app;