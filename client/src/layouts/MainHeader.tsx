import logo from '../assets/logo/logo-burger-friend.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faClose } from '@fortawesome/free-solid-svg-icons';
import { useContext, useEffect, useState } from 'react';
import { MainNav } from './MainNav';
import { Link, useNavigate } from 'react-router';
import { CrudContext } from '../context/CrudContext';

const MainHeader = () => {

    const [isOpen, setIsOpen] = useState<boolean>(false);

    //navigate
    const navigate = useNavigate();

    const {
         isLoggedIn,
         setIsLoggedIn,
         isTriedLogIn,
         setIsTriedLogIn
    } = useContext(CrudContext);

    const token = localStorage.getItem("token");
    /*
    //obtenemos el token guardado
    const [token, setToken] = useState<string | null>(null);

    //un use effect para cambiar
    useEffect(() => {
        if (localStorage.getItem("token")){
            setToken(localStorage.getItem("token"));
            console.log(token);
        }
    }, [isLoggedIn])
    */

    //si damos a log out, eliminamos el token
    const logOut = () => {
        localStorage.removeItem("token");
        setIsLoggedIn(false);
        setIsTriedLogIn(false);
        navigate("/login");
    }
    

    return (
    <header className="bg-text sm:bg-fondito py-6 px-4">

    <div className="max-w-7xl mx-auto rounded-2xl bg-text py-2">
    
    <div className="w-[95%] mx-auto flex flex-row justify-between">

        <figure>
            <Link to={"/"}>
            <img src={logo} alt='logo' className="scale-110 sm:scale-100"/>
            </Link>
        </figure>

        <MainNav/>

        <div className="flex flex-row justify-center sm:justify-between lg:justify-end">

            <div className="hidden md:flex items-center">

                {(isLoggedIn) ? (
                    <button onClick={() => logOut()}  className="bg-accent px-6 h-fit py-3 rounded-xl flex flex-row items-center
                hover:scale-110 transition-all duration-400 shadow-primary border-2 border-primary
                font-primary text-primary cursor-pointer">
                    Log Out
                </button>
                ) : (
                <Link to={"/login"} className="bg-accent px-6 h-fit py-3 rounded-xl flex flex-row items-center
                hover:scale-110 transition-all duration-400 shadow-primary border-2 border-primary
                font-primary text-primary">
                    Log In
                </Link>
                )}
                
            </div>

            <div className="flex lg:hidden items-center p-0 sm:pl-15">
                <button onClick={() => setIsOpen(!isOpen)}>
                <FontAwesomeIcon icon={!isOpen ? faBars : faClose} className="text-primary text-3xl cursor-pointer"/>
                </button>
            </div>

        </div>

    </div>
    </div>
    </header>
        )
}
export default MainHeader;