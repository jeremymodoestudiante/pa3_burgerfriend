interface HeroPlantillaI {
    titulo: string;
    descripcion: string;
    elementoExtra?: React.ReactNode;
}

export const HeroPlantilla = ({titulo, descripcion, elementoExtra}: HeroPlantillaI) => {
    return (
        <section className="min-h-90 lg:min-h-120 bg-fondito flex justify-center items-center px-4"> 
            <div className="max-w-7xl mx-auto">             
                <div className="w-full md:w-[95%] lg:w-[75%] mx-auto flex flex-col gap-8 lg:gap-12">
                    <h1 className="font-primary text-text text-6xl lg:text-8xl text-center">
                        {titulo}
                    </h1>
                    <p className="font-secondary text-text text-[1.15rem] md:text-[1.30rem]/8 text-center max-w-5xl">
                        {descripcion}
                    </p>
                    {elementoExtra && elementoExtra}
                </div>
            </div>
        </section>
    )
}