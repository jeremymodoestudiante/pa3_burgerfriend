import burgerlarge from "../assets/servicio/burgerlarge.webp";
import drinklarge from "../assets/servicio/drinklarge.webp";

import googleplay from "../assets/footer/google-play.png";
import appstore from "../assets/footer/app-store.png";

interface OfertaCardsI {
    extraClassName?: string;
}

export const OfertaCards = ({extraClassName}: OfertaCardsI) => {
    return (
        <section className={`${extraClassName}`}>
        <div className={`max-w-7xl mx-auto px-4 py-25 gap-8 grid grid-cols-1 lg:grid-cols-2`}>
                
                <div className="flex-1 rounded-3xl overflow-hidden border-2 border-text shadow-text ">
                    <figure className="flex relative h-50 md:h-55 lg:h-fit">
                        <img src={burgerlarge} alt="burger" className="w-full h-full object-cover"/>

                        <div className="absolute w-full h-full bg-linear-to-r from-text via:text/50 to:text/15">

                        <div className="flex flex-col w-full h-full gap-5 justify-center items-center">

                        <div className="flex flex-col w-[85%] mx-auto py-4 gap-5 ">
                        <h3 className="font-primary text-primary text-[1.70rem] w-full lg:w-[75%]">
                            Ten un 50% de Descuento si traes un amigo
                        </h3>
                        <a href=""
                        className="py-3 px-10 text-primary font-primary border-2 border-primary w-fit rounded-xl hover:scale-105 transition-all duration-200 ease-out">
                            Ordena Ya
                        </a>
                        </div>
                        </div>

                        </div>

                    </figure>
                    
                </div>

                <div className="flex-1 rounded-3xl overflow-hidden border-2 border-text shadow-text">
                    <figure className="flex relative h-50 md:h-55 lg:h-fit">
                        <img src={drinklarge} alt="drink" className="h-full w-full object-cover"/>

                        <div className="absolute w-full h-full bg-linear-to-r from-black/35 via:black/15 to:black/5">

                        <div className="flex flex-col w-full h-full gap-5 items-start justify-center">

                        <div className="flex flex-col w-[85%] mx-auto py-4 gap-3">
                        <h3 className="font-primary text-primary text-[1.70rem] w-full lg:w-[75%]">
                            Bebidas Frías
                        </h3>
                        
                        <p className="text-primary font-secondary text-lg w-full lg:w-[75%]">
                            Disfruta de las mejores bebidas con tus mejores amigos.
                        </p>

                        <div className="flex flex-row items-center gap-3 lg:gap-5 w-[15.5em] lg:w-[55%] justify-between">
                            <figure className="w-35 lg:w-full hover:scale-105 transition-all duration-300 ease-out">
                                <a href="#" className="">
                                <img className="object-cover" src={googleplay}/>
                                </a>
                            </figure>
                            <figure className="w-35 lg:w-full hover:scale-105 transition-all duration-300 ease-out">
                                <a href="#" className="">
                                <img className="object-cover" src={appstore}/>
                                </a>
                            </figure>
                        </div>

                        </div>
                        </div>

                        </div>

                    </figure>
                    
                </div>
                
            </div>
            </section>
    )
}