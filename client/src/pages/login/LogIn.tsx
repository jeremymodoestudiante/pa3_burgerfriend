import { useContext, useEffect } from "react";
import { CrudContext } from "../../context/CrudContext";
import { Link, useNavigate } from "react-router";
import { useLoginUser } from "./useLogin";

export const LogIn = () => {

    //navigate
    const navigate = useNavigate();

    //traemos los datos de registro
    const {
         emailUserLogin,
         setEmailUserLogin,
         passwordLogin,
         setPasswordLogin,
         isLoggedIn,
         setIsLoggedIn,

         isTriedLogIn,
         setIsTriedLogIn
        } = useContext(CrudContext);

    const emailUserValue = (value: string) => {
        setEmailUserLogin(value);
    }
    const passwordValue = (value: string) => {
        setPasswordLogin(value);
    }

    //para post login user
    const {mutate: loginUserMutation, isError: isErrorLoginUser, 
        isSuccess: isSuccessLoginUser, isPending: isPendingLoginUser,
    error: errorLoginUser} = useLoginUser(); 

    const handleSubmit = (e: React.SubmitEvent<HTMLFormElement>) => {
        e.preventDefault();
        console.log(`email: ${emailUserLogin}`);
        console.log(`password: ${passwordLogin}`);
        loginUserMutation({
            email: emailUserLogin,
            password: passwordLogin
        });
    }
    const token = localStorage.getItem("token");
    //si el log in es exitoso, nos vamos a home
    //y setIsLoggedIn pasa a ser true
    useEffect(() => {
        if (isSuccessLoginUser && token){
            setIsLoggedIn(true);
            limpiarTodo();
            console.log(`isLoggedIn: ${isLoggedIn}; token: ${token && token}`)
            navigate("/");
        }else if (isSuccessLoginUser && !token){
            setIsTriedLogIn(true);
        }
    },[isSuccessLoginUser])

    const limpiarTodo = () => {
        setEmailUserLogin("");
        setPasswordLogin("");
    }
  return ( 
  <section className="bg-fondito">
    <div className="max-w-7xl px-4 mx-auto pt-12 pb-24">
        <h1 className="font-primary text-6xl text-text text-center mb-8">
            Inicia Sesión
        </h1>
        <form onSubmit={(e) => handleSubmit(e)}
            className="bg-card rounded-2xl border-2 border-text shadow-text max-w-5xl mx-auto p-10
                flex flex-col gap-6">
            <div className="grid grid-cols-1 gap-4">
                    <div className="font-secondary text-text flex flex-col gap-2">
                            <label className="font-bold">
                                Correo electrónico
                            </label>
                            <input required type="email" placeholder="Correo electrónico"
                            className="bg-input border-2 border-inputborder rounded-2xl p-4 outline-none focus:border-black focus:border transition-all duration-250 ease-in" 
                            onChange={(e) => emailUserValue(e.target.value)} 
                            value={emailUserLogin}/>
                    </div>

                    <div className="font-secondary text-text flex flex-col gap-2">
                            <label className="font-bold">
                                Contraseña
                            </label>
                            <input required type="password" placeholder="Contraseña"
                            className="bg-input border-2 border-inputborder rounded-2xl p-4 outline-none focus:border-black focus:border transition-all duration-250 ease-in" 
                            onChange={(e) => passwordValue(e.target.value)}
                            value={passwordLogin}/>
                    </div>
            </div>


            <div className="grid grid-cols-1 gap-4">


                <div className="font-secondary text-text flex flex-row gap-8 justify-end items-center">
                    <button type="submit"
                            className="bg-accent text-primary font-bold py-2 px-4 rounded-lg border-2 border-text shadow-buttabtext hover:scale-105 ease-in transition-all duration-150 cursor-pointer">
                                Iniciar Sesión
                    </button>

                    <button type="button" onClick={() => {/*limpiarTodo()*/}}
                            className="bg-fondito text-text font-bold py-2 px-4 rounded-lg border-2 border-text shadow-buttabtext hover:scale-105 ease-in transition-all duration-150 cursor-pointer">
                            <Link to={"/register"}>
                                No tengo cuenta
                            </Link>
                    </button>
                </div>
            </div>
            {/*Mensaje de felicitacion si es que se registra correctamente*/}
                    {(isSuccessLoginUser && token) && (
                        <div className="font-secondary  py-4 text-text  rounded-2xl">
                            <p className="text-center">
                                Se registró correctamente el item.
                            </p>
                        </div>
                    )}
                    {/*Mensaje de error si es que hubo un error*/}
                    {isErrorLoginUser && (
                        <div className="font-secondary bg-accent py-4 text-primary  rounded-2xl">
                            <p className="text-center">
                                Hubo un error al registrar el item: {errorLoginUser.message}
                            </p>
                        </div>
                    )}

                    {/*Mensaje de error si es que hubo un error*/}
                    {(isTriedLogIn && !token) && (
                        <div className="font-secondary bg-accent py-4 text-primary  rounded-2xl">
                            <p className="text-center">
                                Hubo un error al loguearse. Fijese en su correo o contraseña.
                            </p>
                        </div>
                    )}
        </form>
    </div>
  </section>
  );
};