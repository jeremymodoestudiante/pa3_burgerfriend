import logo from "../assets/logo/logo-alter-burger-friend.png";
import googleplay from "../assets/footer/google-play.png";
import appstore from "../assets/footer/app-store.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebookF, faTwitter, faInstagram, faTiktok, type IconDefinition } from "@fortawesome/free-brands-svg-icons";

const MainFooter = () => {

    interface redSocial {
        id: number;
        name: string;
        url: string;
        icon: IconDefinition;
    }

    const redesSociales: redSocial[] = [
        {id: 1, name: "Facebook", url: "https://facebook.com", icon: faFacebookF},
        {id: 2, name: "Twitter", url: "https://x.com", icon: faTwitter},
        {id: 3, name: "Instagram", url: "https://instagram.com", icon: faInstagram},
        {id: 4, name: "TikTok", url: "https://tiktok.com", icon: faTiktok}
    ]

    return (
        <footer className="bg-secondary border-black pt-8 pb-2">

            <div className="max-w-7xl flex flex-col mx-auto">

            <div className="w-full flex flex-col gap-8 items-center
            lg:flex-row lg:justify-between py-4 border-b border-text/20 pb-8">
                <figure className="w-fit md:w-[20%]">
                    <a href="/">
                    <img src={logo} alt="logo" className="object-cover md:object-none"/>
                    </a>
                </figure>

                <ul className="flex flex-row justify-between w-fit gap-4 sm:gap-8 lg:w-[40%] items-center mx-4 md:text-md">
                    <li>
                        <a href="#" className="font-primary text-text hover:text-accent transition-all duration-300 ease-out">
                        Inicio
                        </a>
                    </li>
                    <li>
                        <a href="#" className="font-primary text-text hover:text-accent transition-all duration-300 ease-out">
                        Menu
                        </a>
                    </li>
                    <li>
                        <a href="#" className="font-primary text-text hover:text-accent transition-all duration-300 ease-out">
                        Locales
                        </a>
                    </li>
                    <li>
                        <a href="#" className="font-primary text-text hover:text-accent transition-all duration-300 ease-out">
                        Empresa
                        </a>
                    </li>
                    <li>
                        <a href="#" className="font-primary text-text hover:text-accent transition-all duration-300 ease-out">
                        Nosotros
                        </a>
                    </li>
                </ul>

                <div className="flex flex-row items-center gap-5 w-60 lg:w-[20%] justify-between">
                    <figure className="w-fit lg:w-30 hover:scale-105 transition-all duration-300 ease-out">
                        <a href="#" className="w-full">
                        <img className="" src={googleplay}/>
                        </a>
                    </figure>
                    <figure className="w-fit lg:w-30 hover:scale-105 transition-all duration-300 ease-out">
                        <a href="#" className="w-full">
                        <img className="" src={appstore}/>
                        </a>
                    </figure>
                </div>
            </div>

            <div className="pt-10 pb-6 lg:pb-4 flex flex-col items-center gap-6 lg:flex-row justify-between w-[99%]">
                <p className="font-secondary text-md text-text">Restaurante de Hamburguesas y Comida Rápida</p>

                <ul className="grid grid-cols-4 gap-3 w-fit">
                    {redesSociales.map((redSocial) => (
                        <li key={redSocial.id} className="hover:scale-110 transition-all duration-150 ease-out">
                            <a href={redSocial.url} aria-label={redSocial.name} target="_blank" rel="noopener noreferrer" className="bg-text/10 size-2 p-2.5 rounded-full text-text font-secondary transition-all duration-150 hover:text-text/80">
                                <FontAwesomeIcon icon={redSocial.icon}/>
                            </a>
                        </li>
                    ))}
                </ul>
            </div>

            </div>
        </footer>
    )
}
export default MainFooter;
