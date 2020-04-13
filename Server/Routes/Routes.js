const Express = require('express');
const app = Express();
app.use(require('./Categoria'));
app.use(require('./SubCategoria'));
module.exports = app;