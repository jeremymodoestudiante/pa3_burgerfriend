import { useContext, useEffect, useState } from "react";
import { CrudContext } from "../../context/CrudContext";
import { Link, useNavigate } from "react-router";
import { useRegisterUser } from "./useSignUp";


export const SignUp = () => {

    //iniciamos el navigate
    const navigate = useNavigate();

    //traemos los datos de registro
    const {
         username, setUsername,
         password, setPassword,
         emailUser, setEmailUser,   
         roleUser, setRoleUser,
         estadoUser, setEstadoUser
        } = useContext(CrudContext);

    const usernameValue = (value: string) => {
        setUsername(value);
    }
    const passwordValue = (value: string) => {
        setPassword(value);
    }
    const emailUserValue = (value: string) => {
        setEmailUser(value);
    }
    const roleUserValue = (value: string) => {
        setRoleUser(value);
    }
    const estadoUserValue = (value: boolean) => {
        setEstadoUser(value);
    }

    //para post register user 
    const {mutate: registerUserMutation, isSuccess: isRegisterUserSuccess, isPending, isError: isErrorRegisterUser, error: errorRegisterUser} = useRegisterUser();

    const handleSubmit = (e: React.SubmitEvent<HTMLFormElement>) => {
        e.preventDefault();
        console.log(`username: ${username}`);
        console.log(`password: ${password}`);
        console.log(`email: ${emailUser}`);
        console.log(`role: ${roleUser}`);
        registerUserMutation({
            username: username,
            password: password,
            email: emailUser,
            role: roleUser
        });
        limpiarTodo();
    }

    //hacemos uso de un useEffect para
    //navegar a Login si es que hay exito en registrarse
    useEffect(() => {
        if (isRegisterUserSuccess){
            navigate("/login");
        }
    }, [isRegisterUserSuccess])

    //para limpiar
    const limpiarTodo = () => {
        setUsername("");
        setPassword("");
        setEmailUser("");
        setRoleUser("cliente");
    }

  return ( 
  <section className="bg-fondito">
    <div className="max-w-7xl px-4 mx-auto pt-12 pb-24">
        <h1 className="font-primary text-6xl text-text text-center mb-8">
            Regístrate
        </h1>
        <form onSubmit={(e) => handleSubmit(e)}
            className="bg-card rounded-2xl border-2 border-text shadow-text max-w-5xl mx-auto p-10
                flex flex-col gap-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="font-secondary text-text flex flex-col gap-2">
                            <label className="font-bold">
                                Usuario
                            </label>
                            <input type="text" placeholder="Usuario"
                            className="bg-input border-2 border-inputborder rounded-2xl p-4 outline-none focus:border-black focus:border transition-all duration-250 ease-in" 
                            onChange={(e) => usernameValue(e.target.value)} 
                            value={username}/>
                    </div>

                    <div className="font-secondary text-text flex flex-col gap-2">
                            <label className="font-bold">
                                Contraseña
                            </label>
                            <input type="password" placeholder="Contraseña"
                            className="bg-input border-2 border-inputborder rounded-2xl p-4 outline-none focus:border-black focus:border transition-all duration-250 ease-in" 
                            onChange={(e) => passwordValue(e.target.value)}
                            value={password}/>
                    </div>
            </div>

            <div className="grid grid-cols-1">

                    <div className="font-secondary text-text flex flex-col gap-2">
                            <label className="font-bold">
                                Correo electrónico
                            </label>
                            <input type="text" placeholder="Correo electrónico"
                            className="bg-input border-2 border-inputborder rounded-2xl p-4 outline-none focus:border-black focus:border transition-all duration-250 ease-in"
                            onChange={(e) => emailUserValue(e.target.value)}
                            value={emailUser}/>
                    </div>

                    
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">

                <div className="font-secondary text-text flex flex-col gap-2">
                            <label className="font-bold">
                                Rol
                            </label>
                            <select className="bg-input border-2 border-inputborder rounded-2xl p-4 outline-none focus:border-black focus:border transition-all duration-250 ease-in" onChange={(e) => roleUserValue(e.target.value)} value={roleUser}>
                                <option value={"cliente"}>
                                    Cliente
                                </option>
                                <option value={"supervisor"}>
                                    Supervisor
                                </option>
                            </select>
                        </div>

                <div className="font-secondary text-text flex flex-row gap-8 justify-end items-center">
                    <button type="submit"
                            className="bg-accent text-primary font-bold py-2 px-4 rounded-lg border-2 border-text shadow-buttabtext hover:scale-105 ease-in transition-all duration-150 cursor-pointer">
                                Registrarse
                    </button>

                    <button type="button" onClick={() => limpiarTodo()}
                            className="bg-fondito text-text font-bold py-2 px-4 rounded-lg border-2 border-text shadow-buttabtext hover:scale-105 ease-in transition-all duration-150 cursor-pointer">
                                <Link to={"/login"}>
                                    Ya tengo cuenta
                                </Link>
                    </button>
                </div>
            </div>

            {/*Mensaje de felicitacion si es que se registra correctamente*/}
                    {isRegisterUserSuccess && (
                        <div className="font-secondary  py-4 text-text  rounded-2xl">
                            <p className="text-center">
                                Se registró correctamente el item.
                            </p>
                        </div>
                    )}
                    {/*Mensaje de error si es que hubo un error*/}
                    {isErrorRegisterUser && (
                        <div className="font-secondary bg-accent py-4 text-primary  rounded-2xl">
                            <p className="text-center">
                                Hubo un error al registrar el item: {errorRegisterUser.message}
                            </p>
                        </div>
                    )}

        </form>
    </div>
  </section>
  );
};
