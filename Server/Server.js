require('./Config/Config');
const Express = require('express');
const Mongoose = require('mongoose');
const BodyParser = require('body-parser');
const app = Express();
app.use(BodyParser.urlencoded({ extended: false }));
app.use(BodyParser.json());
app.use(require('./Routes/Routes'));
Mongoose.set('useCreateIndex', true);
Mongoose.set('useFindAndModify', false);
Mongoose.connect(process.env.URL_DB,
    { useNewUrlParser: true, useUnifiedTopology: true }, (error, result) => {
        if (error) throw error;
    });
app.listen(process.env.PORT, () => { });