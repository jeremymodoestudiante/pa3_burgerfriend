const bcrypt = require("bcryptjs");
const User = require("../models/User");

async function createUser(userData) {
    const {username, password, email, role, estado} = userData;
    const hashedPassword = await bcrypt.hash(password, 10);
    const nuevoUser = new User({
                username,
                password: hashedPassword,
                email,
                role,
                estado
    });
    const savedUser = await nuevoUser.save();
    return savedUser;
}

module.exports = {createUser};