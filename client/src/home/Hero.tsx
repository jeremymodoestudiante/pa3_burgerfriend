import { Link } from "react-router";
import burger1 from "../assets/hero/burger-1.webp";
import burger2 from "../assets/hero/burger-2.webp";

const Hero = () => {
    return (
    <section className="min-h-screen bg-fondito pt-10 lg:py-10">

        <div className="max-w-full py-12 mx-auto min-h-screen flex flex-col lg:flex-row justify-between items-center">

            <div className="hidden lg:min-h-screen overflow-hidden lg:flex flex-col justify-center items-start">
            
            <figure className="-rotate-10 lg:scale-150 lg:-translate-x-20 lg:-translate-y-20 ">
                    <img src={burger1} alt="burger2"
                    className="size-80"/>
            </figure>
            </div>

            
            <div className="flex flex-col justify-center items-center w-[85%] md:w-[50%] gap-8 lg:min-h-screen">
    
                <div className="flex flex-col gap-3 justify-center items-center">
                    <h1 className="font-primary text-primary text-5xl md:text-8xl text-shadow-sombrita md:text-shadow-sombra text-delineadito md:text-delineado">
                        Real sazón.
                    </h1>
                    <h1 className="font-primary text-primary text-5xl md:text-8xl text-shadow-sombrita md:text-shadow-sombra text-delineadito md:text-delineado">
                        Real fulgor.
                    </h1>
                    <h1 className="font-primary text-primary text-5xl md:text-8xl text-shadow-sombrita md:text-shadow-sombra text-delineadito md:text-delineado">
                        Real sabor.
                    </h1>
                </div>

                
                <div className="w-full lg:w-[96%]">
                    <p className="font-secondary text-text text-lg md:text-2xl text-center">
                        Una hamburguesa es buena. Un amigo es bueno.
                        Una amistad con hamburguesa es mucho mejor.
                    </p>
                </div>
                
                
                <div className="flex items-center">
                    <Link to={"/itemcrud"} className="font-primary px-10 py-3 rounded-xl bg-accent text-primary text-xl shadow-text border-2 border-text hover:scale-105 transition-all duration-300 ease-out">
                            Ordena ya
                    </Link>
                </div>
            </div>

            <div className="lg:min-h-screen overflow-hidden flex flex-col justify-center items-start">
                <figure className="rotate-10 lg:scale-150 lg:translate-x-20 lg:-translate-y-20">
                        <img src={burger2} alt="burger2"
                        className="size-80"/>
                </figure>
            </div>
        </div>
    </section>
    )
}
export default Hero;