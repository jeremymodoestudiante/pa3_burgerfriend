import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import cap1 from "../assets/captura/cap1.webp";
import cap2 from "../assets/captura/cap2.webp";
import cap3 from "../assets/captura/cap3.webp";
import cap4 from "../assets/captura/cap4.webp";
import { faInstagram } from "@fortawesome/free-brands-svg-icons";

interface CardI {
    img: string;
}

const CardData: CardI[] = [
    {
        img: cap1
    },
    {
        img: cap2
    },
    {
        img: cap3
    },
    {
        img: cap4
    }
];

const Card = ({img}: CardI) => {
    return (
        <figure className="border-2 border-text rounded-2xl shadow-reviewcard overflow-hidden h-40 lg:h-60 hover:scale-105 transition-all duration-150 ease-in cursor-pointer">
                <img src={img} className="w-full h-full object-cover"/>
        </figure>
    )
}

export const Captura = () => { 
    return (
        <section className="bg-fondito lg:h-165">
            <div className="relative max-w-7xl mx-auto px-4">
                <div className="display-none absolute bg-secondary max-w-5xl mx-auto rounded-2xl lg:h-145 h-full w-[90%] inset-0 m-0">
                    
                </div>
                <div className="relative mx-auto w-full z-20 flex flex-col gap-12 py-12">
                        <h1 className="font-primary text-center text-text text-3xl lg:text-5xl">
                        ¡Captura el momento!
                        </h1>
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 lg:gap-8">
                            {CardData.map(({img}) => (
                                <Card key={img} img={img}/>
                            ))}
                            
                        </div>

                        <div className="flex items-center w-fit mx-auto">
                            <a href="#" className="font-primary text-text text-xl bg-fondito px-9 py-3 border-2 border-text rounded-2xl shadow-text hover:scale-110 transition-all duration-300 ease-out w-full text-center md:w-fit flex flex-row gap-2">
                            <span>
                                <FontAwesomeIcon icon={faInstagram}/>
                                </span>
                                Más en Instagram
                            </a>
                        </div>
                </div>
                
            </div>
        </section>
    )
}