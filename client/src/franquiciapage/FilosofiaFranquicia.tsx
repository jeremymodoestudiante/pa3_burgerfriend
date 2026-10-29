import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import img from "../assets/story/storyp.webp";
import { faPlay } from "@fortawesome/free-solid-svg-icons";

export const FilosofiaFranquicia = () => {
    return (
        <section className="bg-fondito">
            <div className="max-w-7xl mx-auto px-4 py-24 grid grid-cols-1 lg:grid-cols-2 gap-24">
                <div className="order-2 md:order-1">
                <figure className="overflow-hidden border-2 border-text rounded-2xl shadow-text h-80 md:h-110">
                    <img src={img} className="w-full h-full object-cover"/>
                </figure>
                </div>

                <div className="flex flex-col text-text order-1 md:order-2">
                    <div className="flex flex-col border-b border-text/10 gap-12 pb-10">
                        <h2 className="font-primary  text-5xl lg:text-6xl">
                        La Filosofía de Burger Friend
                        </h2>
                        <p className="font-secondary text-lg">
                            Creemos en la riqueza de los platillos que surgen del fuego vivo. Por ello, cocinamos con los mejores ingredientes a fuego alto pero controlado. La calidad de nuestros sabores reflejan nuestro estilo de vida.
                        </p>
                    </div>
                    
                    <div className="pt-12 flex flex-col md:flex-row gap-4">
                        <div className="bg-secondary text-3xl p-4 rounded-full border-2 border-text hover:scale-110 transition-all duration-150 ease-out cursor-pointer w-fit mx-auto md:mx-0">
                            <a href="#" target="_blank" rel="noopener noreferrer">
                            <FontAwesomeIcon icon={faPlay}/>
                            </a>
                        </div>
                        <div className="flex flex-col gap-2 text-center md:text-left">
                            <p className="font-secondary">
                                Mira nuestra Cocina
                            </p>
                            <p className="font-primary text-xl">
                                Ver YouTube
                            </p>
                        </div> 
                    </div>

                </div>
            </div>
        </section>
    )
}