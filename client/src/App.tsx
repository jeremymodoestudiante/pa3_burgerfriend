import { RouterProvider } from "react-router";
import { router } from "./router";
import { CrudContext } from "./context/CrudContext";
import { useState } from "react";


const App = () => {

    //los valores
    //id item
    const [id, setId] = useState<string>("");
    //nombre item
    const [nombre, setNombre] = useState<string>("");
    //categoria item
    const [categoria, setCategoria] = useState<string>("Hamburguesa");
    //descripcion item
    const [descripcion, setDescripcion] = useState<string>("");
    //precio item
    const [precio, setPrecio] =useState<number>(0);
    //stock item
    const [stock, setStock] = useState<number>(0);
    //estado item
    const [estado, setEstado] = useState<boolean>(true);

    //texto button
    const [buttonText, setButtonText] = useState<string>("Registrar");

    //estado post/put
    const [isPut, setIsPut] = useState<boolean>(false);

    //estado delete
    const [isDelete, setIsDelete] = useState<boolean>(false);

    //title crud
    const [titleCrud, setTitleCrud] = useState<string>("Registrar Item");

    //autenticacion
    //signup
    const [username, setUsername] = useState<string>("");
    const [password, setPassword] = useState<string>("");
    const [emailUser, setEmailUser] = useState<string>("");
    const [roleUser, setRoleUser] = useState<string>("cliente");
    const [estadoUser, setEstadoUser] = useState<boolean>(true);

    //login
    const [emailUserLogin, setEmailUserLogin] = useState<string>("");
    const [passwordUserLogin, setPasswordUserLogin] = useState<string>("");

    //se logueo
    const [isLoggedIn, setIsLoggedIn] = useState<boolean>(false);
    //se intento loguear
    const [isTriedLogIn, setIsTriedLogIn] = useState<boolean>(false);
    return (
        <>
        <CrudContext.Provider value={{
            id: id,
            setId: setId,
            nombre: nombre,
            setNombre: setNombre,
            descripcion: descripcion,
            setDescripcion: setDescripcion,
            categoria: categoria,
            setCategoria: setCategoria,
            precio: precio,
            setPrecio: setPrecio,
            stock: stock,
            setStock: setStock,
            estado: estado,
            setEstado: setEstado,
            buttonText: buttonText,
            setButtonText: setButtonText,
            isPut: isPut,
            setIsPut: setIsPut,
            isDelete: isDelete,
            setIsDelete: setIsDelete,
            titleCrud: titleCrud,
            setTitleCrud: setTitleCrud,
            
            //autenticacion
            //signup
            username: username,
            setUsername: setUsername,
            password: password,
            setPassword: setPassword,
            emailUser: emailUser,
            setEmailUser: setEmailUser,
            roleUser: roleUser,
            setRoleUser: setRoleUser,
            estadoUser: estadoUser,
            setEstadoUser: setEstadoUser,

            //login
            emailUserLogin: emailUserLogin,
            setEmailUserLogin: setEmailUserLogin,
            passwordLogin: passwordUserLogin,
            setPasswordLogin: setPasswordUserLogin,

            //se logueo
            isLoggedIn: isLoggedIn,
            setIsLoggedIn: setIsLoggedIn,

            //se intento loguear
            isTriedLogIn: isTriedLogIn,
            setIsTriedLogIn: setIsTriedLogIn
        }}>
        <RouterProvider router={router}/>
        </CrudContext.Provider>
        </>
    )
}

export default App;