const User = require("../models/User");
const bcrypt = require("bcryptjs");

const createAdminAccount = async() => {
    try{
        const existingAdmin = await User.findOne({
            role: "admin"
        });
        if (!existingAdmin){
            const nuevoAdmin = new User({
                username: "admin",
                password: await bcrypt.hash("admin", 10),
                email: "admin@burgerfriend.com",
                role: "admin"
            });
            await nuevoAdmin.save();
            console.log("Cuenta de admin creada exitosamente");
        }else{
            console.log("Ya existe una cuenta de admin");
        }
    } catch(error) {
        console.error(error.message);
    }
}

module.exports = createAdminAccount;