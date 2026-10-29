const express = require('express');
const router = express.Router();
const Item = require('../models/Item');

//1. GET ALL (Obtener todos los productos)
router.get('/', async (req, res) => {
    try{
        const items = await Item.find();
        res.json(items);
    }catch (error){
        res.status(500).json({
            mensaje: 'Error al consultar items',
            error: error.message
        })
    }
});

//2. GET BY ID (Obtener item por ID de MongoDB)
router.get('/:id', async (req, res) => {
    try{
        const item = await Item.findById(req.params.id);
        if (!item) return res.status(404).json({
            mensaje: 'Item no encontrado'
        });
        res.json(item);
    } catch (error){
        res.status(500).json({
            mensaje: 'Error al buscar el item',
            error: error.message
        })
    }
});

//3. POST (Crear un nuevo item)
router.post('/', async (req, res) => {
    try {
        const {nombre, descripcion, categoria, stock, precio, estado} = req.body;
        const nuevoItem = new Item({nombre, descripcion, categoria, stock, precio, estado});
        await nuevoItem.save();
        res.status(201).json({
            mensaje: 'Item creado exitosamente',
            producto: nuevoItem
        })
    } catch(error) {
        res.status(400).json({
            mensaje: 'Error al crear el producto',
            error: error.message
        })
    }
});

//4. PUT (Actualizar item por ID)
router.put('/:id', async (req, res) => {
    try {
        const itemActualizado = await Item.findByIdAndUpdate(
            req.params.id,
            req.body,
            { new: true, runValidators: true}
        );
        if (!itemActualizado) return res.status(404).json({
            mensaje: 'Item no encontrado'
        });
        res.json({
            mensaje: 'Item actualizado exitosamente',
            item: itemActualizado
        });
    } catch (error){
        res.status(400).json({
            mensaje: 'Error al actualizar producto',
            error: error.message
        })
    }
})

//5. DELETE (Eliminar item por ID)
router.delete('/:id', async (req, res) => {
    try {
        const itemEliminado = await Item.findByIdAndDelete(req.params.id);
        if (!itemEliminado) return res.status(404).json({
            mensaje: 'Item no encontrado'
        });
        res.json({
            mensaje: 'Item eliminado correctamente'
        });
    } catch (error) {
        res.status(500).json({
            mensaje: 'Error al eliminar item',
            error: error.message
        })
    }
});

module.exports = router;