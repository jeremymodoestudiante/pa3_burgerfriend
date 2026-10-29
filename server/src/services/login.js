const bcrypt = require("bcryptjs");
const User = require("../models/User");
const {generateToken} = require("../utils/jwtUtils");

async function login(email, password) {
    try {
        const existingUser = await User.findOne({email});
        if (!existingUser) {
            throw new Error("El usuario no existe");
        }
        const isPasswordValid = await bcrypt.compare(password, existingUser.password);

        if (!isPasswordValid){
            throw new Error("Contraseña incorrecta");
        }
        const token = generateToken(existingUser);
        return token;
    } catch (error) {
        throw new Error("Credenciales inválidos");
    }
}
module.exports = {
    login
}