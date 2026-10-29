export interface ItemMenuI {
    img: string;
    nombre: string;
    precio: number;
}

export interface PlantillaMenuI {
    item1: ItemMenuI;
    item2: ItemMenuI;
    item3: ItemMenuI;
    item4: ItemMenuI;
    item5: ItemMenuI;
    item6: ItemMenuI;
}

export const PlantillaMenu = ({item1, item2, item3, item4, item5, item6}: PlantillaMenuI) => {
    return (
        <div className="lg:py-12 py-6">

                <div className="grid grid-cols-1 lg:grid-cols-3 items-center justify-center">
                    
                    <div className="flex flex-col items-center lg:border-r border-b border-text/10 pb-8">
                        <figure>
                            <img src={item1.img} alt="chicken burger" 
                            className="size-80 cursor-pointer hover:scale-110 transition-all duration-300"/>
                        </figure>

                        <div className="flex flex-col items-center gap-5">
                            <p className="font-primary text-2xl text-text uppercase">
                                {item1.nombre}
                            </p>
                            <p className="font-primary text-accent text-3xl">
                                S/{item1.precio.toFixed(2)}
                            </p>
                        </div>
                    </div>
                    
                    <div className="flex flex-col items-center lg:border-r border-b border-text/10 pb-8">
                        <figure>
                            <img src={item2.img} alt="beef burger"
                            className="size-80 cursor-pointer hover:scale-110 transition-all duration-300 ease-out" />
                        </figure>
                        <div className="flex flex-col items-center gap-5">
                            <p className="font-primary text-2xl text-text uppercase">
                                {item2.nombre}
                            </p>
                            <p className="font-primary text-accent text-3xl">
                                S/{item2.precio.toFixed(2)}
                            </p>
                        </div>
                    </div>

                    <div className="flex flex-col items-center border-b border-text/10 pb-8">
                        <figure>
                            <img src={item3.img} alt="cheese burger"
                            className="size-80 hover:scale-110 transition-all duration-300 ease-out cursor-pointer" />
                        </figure>
                        <div className="flex flex-col items-center gap-5">
                            <p className="font-primary text-2xl text-text uppercase">
                                {item3.nombre}
                            </p>
                            <p className="font-primary text-accent text-3xl">
                                S/{item3.precio.toFixed(2)}
                            </p>
                        </div>
                    </div>

                </div>


                <div className="grid grid-cols-1 lg:grid-cols-3 items-center justify-center">
                        <div className="flex flex-col items-center lg:border-r border-b lg:border-b-0 border-text/10 pb-8">
                            <figure>
                                <img src={item4.img} alt="vegan burger" 
                                className="size-80 hover:scale-110 transition-all duration-300 ease-out cursor-pointer"/>
                            </figure>

                            <div className="flex flex-col items-center gap-5">
                                <p className="font-primary text-2xl text-text uppercase">
                                    {item4.nombre}
                                </p>
                                <p className="font-primary text-accent text-3xl">
                                    S/{item4.precio.toFixed(2)}
                                </p>
                            </div>
                        </div>

                        <div className="flex flex-col items-center lg:border-r border-b lg:border-b-0 border-text/10 pb-8">
                            <figure>
                                <img src={item5.img} alt="double cheese burger"  className="size-80 hover:scale-110 transition-all duration-300 ease-out cursor-pointer"/>
                            </figure>

                            <div className="flex flex-col items-center gap-5">
                                <p className="font-primary text-2xl text-text uppercase">
                                    {item5.nombre}
                                </p>
                                <p className="font-primary text-accent text-3xl">
                                    S/{item5.precio.toFixed(2)}
                                </p>
                            </div>
                        </div>

                        <div className="flex flex-col items-center pb-8">
                            <figure>
                                <img src={item6.img} alt="monster burger" className="size-80 hover:scale-110 transition-all duration-300 ease-out cursor-pointer overflow-hidden"/>
                            </figure>

                            <div className="flex flex-col items-center gap-5">
                                <p className="font-primary text-2xl text-text uppercase">
                                    {item6.nombre}
                                </p>
                                <p className="font-primary text-accent text-3xl">
                                    S/{item6.precio.toFixed(2)}
                                </p>
                            </div>
                    </div>

                </div>
            </div>
    )
}