import hamburger from "../assets/servicio/hamburger.webp";
import milkshake from "../assets/servicio/milkshake.webp";
import chips from "../assets/servicio/chips.webp";
import bananasplit from "../assets/servicio/bananasplit.webp";

import burgerlarge from "../assets/servicio/burgerlarge.webp";
import drinklarge from "../assets/servicio/drinklarge.webp";

import googleplay from "../assets/footer/google-play.png";
import appstore from "../assets/footer/app-store.png";

interface ItemUnitI {
    id: number;
    title: string;
    image: string;
}

const Items: ItemUnitI[] = [
    {
        id: 1,
        title: "Burgers",
        image: hamburger
    },
    {
        id: 2,
        title: "Milkshakes",
        image: milkshake
    },
    {
        id: 3,
        title: "Chips",
        image: chips
    },
    {
        id: 4,
        title: "Sweets",
        image: bananasplit
    }
];

const ItemUnit = ({image, title, id}: ItemUnitI) => {
    return (
        <div id={id.toString()} className="bg-primary p-4 rounded-3xl border-2 border-text flex flex-col gap-4 shadow-text hover:shadow-hovercito transition-all ease-out duration-150 w-fit mx-auto lg:w-full">

            <figure className="rounded-2xl overflow-hidden hover:-translate-y-1.5 transition-all duration-300 ease-in-out cursor-pointer">
                <img className="object-cover" src={image} alt="item"/>
            </figure>

            <p className="font-primary text-[1.675rem] md:text-[1.975rem] lg:text-[1.975rem] text-center text-text"> 
                {title}
            </p>
        </div>
    )
}

const Servicio = () => {
    return (
    <section className="min-h-screen bg-fondito">
        <div className="max-w-7xl mx-auto px-4">
            <div className="w-full lg:w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 md:gap-8 lg:gap-8 mx-auto">
                {Items.map((({image, title, id}) => (
                    <ItemUnit key={id} id={id} image={image} title={title}/>
                )))}
            </div>

            <div className="w-full py-25 gap-8 grid grid-cols-1 lg:grid-cols-2">
                
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
        </div>
    </section>
    )
}
export default Servicio;