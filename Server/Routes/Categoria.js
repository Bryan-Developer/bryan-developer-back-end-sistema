const Express = require('express');
let Categoria = require('../Models/Categoria');
let app = Express();
app.get('/categorias', (request, response) => {
    Categoria.find({})
        .sort('descripcion')
        .exec((error, categorias) => {
            if (error) return response.status(500).json({ ok: false, error });
            response.json({ ok: true, categorias })
        });
});
app.post('/categoria', (request, response) => {
    let body = request.body;
    let categoria = new Categoria({ descripcion: body.descripcion });
    categoria.save((error, documento) => {
        if (error) return response.status(500).json({ ok: false, error });
        if (!documento) return response.status(400).json({
            ok: false,
            error
        });
        response.json({ ok: true, categoria: documento });
    });
});
app.put('/categoria/:id', (request, response) => {
    let id = request.params.id;
    let body = request.body;
    let actualizarDescripcion = {
        descripcion: body.descripcion
    };
    Categoria.findByIdAndUpdate(id, actualizarDescripcion, { new: true, runValidators: true },
        (error, categoria) => {
            if (error) return response.status(500).json({ ok: false, error });
            if (!categoria) return response.status(400).json({ ok: false, error });
            response.json({ ok: true, categoria })
        });
});
module.exports = app;