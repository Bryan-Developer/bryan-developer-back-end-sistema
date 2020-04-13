const Express = require('express');
const app = Express();
app.use(require('./Categoria'));
app.use(require('./SubCategoria'));
app.use(require('./Segmento'))
module.exports = app;