import { createContext, type Dispatch, type SetStateAction } from "react";

export interface CrudContext {
    id: string,
    setId: Dispatch<SetStateAction<string>>,
    nombre: string,
    setNombre: Dispatch<SetStateAction<string>>,
    descripcion: string,
    setDescripcion: Dispatch<SetStateAction<string>>,
    categoria: string,
    setCategoria: Dispatch<SetStateAction<string>>,

    precio: number,
    setPrecio: Dispatch<SetStateAction<number>>,
    
    stock: number,
    setStock: Dispatch<SetStateAction<number>>,
    
    estado: boolean,
    setEstado: Dispatch<SetStateAction<boolean>>,
    buttonText: string,
    setButtonText: Dispatch<SetStateAction<string>>,
    isPut: boolean,
    setIsPut: Dispatch<SetStateAction<boolean>>,
    isDelete: boolean,
    setIsDelete: Dispatch<SetStateAction<boolean>>,
    titleCrud: string,
    setTitleCrud: Dispatch<SetStateAction<string>>,

    //autenticacion
    //signup
    username: string;
    setUsername: Dispatch<SetStateAction<string>>,
    password: string;
    setPassword: Dispatch<SetStateAction<string>>,
    emailUser: string;
    setEmailUser: Dispatch<SetStateAction<string>>,
    roleUser: string;
    setRoleUser: Dispatch<SetStateAction<string>>;
    estadoUser: boolean;
    setEstadoUser: Dispatch<SetStateAction<boolean>> 
    
    //login
    emailUserLogin: string;
    setEmailUserLogin: Dispatch<SetStateAction<string>>;
    passwordLogin: string;
    setPasswordLogin: Dispatch<SetStateAction<string>>; 

    //se logueo
    isLoggedIn: boolean;
    setIsLoggedIn: Dispatch<SetStateAction<boolean>>;
    //se intento loguear
    isTriedLogIn: boolean;
    setIsTriedLogIn: Dispatch<SetStateAction<boolean>>;
}

export const CrudContext = createContext<CrudContext>({
    id: "",
    setId: () => {},
    nombre: "",
    setNombre: () => {},
    descripcion: "",
    setDescripcion: () => {},
    categoria: "",
    setCategoria: () => {},
    precio: 0,
    setPrecio: () => {},
    stock: 0,
    setStock: () => {},
    estado: true,
    setEstado: () => {},
    buttonText: "",
    setButtonText: () => {},
    isPut: false,
    setIsPut: () => {},
    isDelete: false,
    setIsDelete: () => {},
    titleCrud: "",
    setTitleCrud: () => {},

    //autenticacion
    //signup
    username: "",
    setUsername: () => {},
    password: "",
    setPassword: () => {},
    emailUser: "",
    setEmailUser: () => {},
    roleUser: "",
    setRoleUser: () => {},
    estadoUser: false,
    setEstadoUser: () => {},

    //login
    emailUserLogin: "",
    setEmailUserLogin: () => {},
    passwordLogin: "",
    setPasswordLogin: () => {},

    //se logueo
    isLoggedIn: false,
    setIsLoggedIn: () => {},

    //se intento loguear
    isTriedLogIn: false,
    setIsTriedLogIn: () => {}
});