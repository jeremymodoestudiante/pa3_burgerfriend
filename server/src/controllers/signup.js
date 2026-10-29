const signUpService = require("../services/signup");

async function createUser(req, res) {
    try {
        const userData = req.body;
        const user = await signUpService.createUser(userData);
        res.status(201).json({
            user: user,
            message: "Usuario registrado correctamente"
        })
    } catch (error) {
        console.log(error);
        res.status(400).json({
            mensaje: error.message
        })
    }
}
module.exports = {createUser};