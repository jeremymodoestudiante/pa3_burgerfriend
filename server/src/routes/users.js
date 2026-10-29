const express = require('express');
const router = express.Router();
const User = require('../models/User');
const bcrypt = require('bcryptjs');
const { login } = require('../controllers/login');
const { createUser } = require('../controllers/signup');

//registrar user
router.post("/register", createUser);

//login user
router.post("/login", login);

//1. GET ALL (Obtener todos los users)
router.get('/', async (req, res) => {
    try {
        const users = await User.find();
        res.json(users);
    } catch (error){
        res.status(500).json({
            mensaje: 'Error al consultar usuarios',
            error: error.message
        })
    }
});
//2. GET BY ID
router.get('/:id', async (req, res) => {
    try {
        const user = await User.findById(req.params.id);
        if (!user) return res.status(404).json({
            mensaje: 'Usuario no encontrado'
        });
        res.json(user);
    } catch (error) {
        res.status(500).json({
            mensaje: 'Error al buscar usuario',
            error: error.message
        })
    }
})
//4. PUT (Actualizar item por ID)
router.put('/:id', async (req, res) => {
    try {
        const userActualizado = await User.findByIdAndUpdate(
            req.params.id,
            req.body,
            { new: true, runValidators: true}
        );
        if (!userActualizado) return res.status(404).json({
            mensaje: 'Usuario no encontrado'
        });
        res.json({
            mensaje: 'Usuario actualizado exitosamente',
            item: userActualizado
        });
    } catch (error){
        res.status(400).json({
            mensaje: 'Error al actualizar usuario',
            error: error.message
        })
    }
})
//5. DELETE (Eliminar user por ID)
router.delete('/:id', async (req, res) => {
    try {
        const userEliminado = await User.findByIdAndDelete(req.params.id);
        if (!userEliminado) return res.status(404).json({
            mensaje: 'Usuario no encontrado'
        });
        res.json({
            mensaje: 'Usuario eliminado correctamente'
        });
    } catch (error) {
        res.status(500).json({
            mensaje: 'Error al eliminar usuario',
            error: error.message
        })
    }
});


module.exports = router;