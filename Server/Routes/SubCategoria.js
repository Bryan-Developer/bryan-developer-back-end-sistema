const Express = require('express');
let SubCategoria = require('../Models/SubCategoria');
let app = Express();
app.get('/subcategorias', (request, response) => {
    SubCategoria.find({}).sort('descripcion').exec((error, subcategorias) => {
        if (error) return response.status(500).json({ ok: false, error });
        response.json({ ok: true, subcategorias });
    });
});
app.get('/subcategorias/:idcategoria/categoria', (request, response) => {
    let idCategoria = request.params.idcategoria;
    SubCategoria.find({ categoria: idCategoria }).sort('descripcion').exec((error, subcategorias) => {
        if (error) return response.status(500).json({ ok: false, error });
        response.json({ ok: true, subcategorias });
    });
});
app.get('/subcategoria/:id', (request, response) => {
    let id = request.params.id;
    SubCategoria.findById(id, (error, subCategoria) => {
        if (error) return response.status(500).json({ ok: false, error });
        response.json({ ok: true, subCategoria });
    });
});
app.post('/subcategoria', (request, response) => {
    let body = request.body;
    let subCategoria = new SubCategoria({
        descripcion: body.descripcion,
        categoria: body.categoria
    });
    subCategoria.save((error, resultado) => {
        if (error) return response.status(500).json({ ok: false, error });
        response.status(201).json({ ok: true, subCategoria: resultado });
    });
});
app.put('/subcategoria/:id', (request, response) => {
    let id = request.params.id;
    let body = request.body;
    let actualizarSubCategoria = {
        descripcion: body.descripcion,
        categoria: body.categoria
    };
    SubCategoria.findByIdAndUpdate(id, actualizarSubCategoria, { runValidators: true },
        (error, subCategoria) => {
            if (error) return response.status(500).json({ ok: false, error });
            if (!subCategoria) return response.status(400).json({ ok: false, error });
            response.json({ ok: true, mensaje: 'La ACTUALIZACIÓN fue un exito.' });
        });
});
app.delete('/subcategoria/:id', (request, response) => {
    let id = request.params.id;
    SubCategoria.findOneAndDelete(id, (error, subCategoria) => {
        if (error) return response.status(500).json({ ok: false, error });
        if (!subCategoria) return response.status(400).json({ ok: false, error: { mensaje: `Sub Categoria con el siguiente id:${id} no existe` } });
        response.json({ ok: true, mensaje: 'Sub Categoria Eliminada' });
    });
});
module.exports = app;