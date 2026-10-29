import { PlantillaMenu, type PlantillaMenuI } from "../components/PlantillaMenu"

const Rombito = () => {
    return (
        <span className="bg-text/10 rotate-45 p-1.25 h-1"/>
    )
}

const Rombitos = () => {
    return (
        <div className="w-full flex flex-row items-center gap-3">
                    <Rombito></Rombito>
                    <Rombito></Rombito>
                    <Rombito></Rombito>
                    <Rombito></Rombito>
                    <Rombito></Rombito>
                    <Rombito></Rombito>
                    <Rombito></Rombito>
                    <Rombito></Rombito>
                    <Rombito></Rombito>
                    <Rombito></Rombito>
                    <Rombito></Rombito>
                    <Rombito></Rombito>
                    <Rombito></Rombito>
                    <Rombito></Rombito>
                    <Rombito></Rombito>
                    <Rombito></Rombito>
                    <Rombito></Rombito>
                    <Rombito></Rombito>
                    <Rombito></Rombito>
                    <Rombito></Rombito>
                    <Rombito></Rombito>
                    <Rombito></Rombito>
                    <Rombito></Rombito>
                    <Rombito></Rombito>
                    <Rombito></Rombito>
                    <Rombito></Rombito>
                    <Rombito></Rombito>
                    <Rombito></Rombito>
                    <Rombito></Rombito>
                    <Rombito></Rombito>
                    <Rombito></Rombito>
                    <Rombito></Rombito>
                    <Rombito></Rombito>
                    <Rombito></Rombito>
                    <Rombito></Rombito>
                    <Rombito></Rombito>
                    <Rombito></Rombito>
                    <Rombito></Rombito>
                    <Rombito></Rombito>
                    <Rombito></Rombito>
                    <Rombito></Rombito>
                    <Rombito></Rombito>
                    <Rombito></Rombito>
                    <Rombito></Rombito>
                    <Rombito></Rombito>
                    <Rombito></Rombito>
                    <Rombito></Rombito>
                    <Rombito></Rombito>
                    <Rombito></Rombito>
                    <Rombito></Rombito>
                    <Rombito></Rombito>
                    <Rombito></Rombito>
                    <Rombito></Rombito>
                    <Rombito></Rombito>
                    <Rombito></Rombito>
                    <Rombito></Rombito>
                    <Rombito></Rombito>
                    <Rombito></Rombito>
                    <Rombito></Rombito>
                    <Rombito></Rombito>
                    <Rombito></Rombito>
                    <Rombito></Rombito>
                    <Rombito></Rombito>
                    <Rombito></Rombito>
                    <Rombito></Rombito>
                    <Rombito></Rombito>
                    <Rombito></Rombito>
                    <Rombito></Rombito>
                    <Rombito></Rombito>
                    <Rombito></Rombito>
        </div>
    )
}

export interface PlantillaCartaI {
    titulo: string;
    menu: PlantillaMenuI;
}

export const PlantillaCarta = ({titulo, menu}: PlantillaCartaI) => {
    return (
        <section className="min-h-screen bg-secondary">

            <div className="max-w-7xl mx-auto px-4 flex flex-col py-8">
                <div className="relative flex flex-row py-8 items-center overflow-hidden w-[95%] mx-auto">
                    
                    <Rombitos/>

                    <div className="absolute w-fit inset-x-0 m-auto lg:inset-0 lg:m-auto bg-secondary px-2 lg:px-8">
                        <h1 className="font-primary text-text text-[2.4rem] lg:text-6xl">
                            {titulo}
                        </h1>
                    </div>
                </div>

                <PlantillaMenu item1={menu.item1} item2={menu.item2} item3={menu.item3} item4={menu.item4} item5={menu.item5} item6={menu.item6}/>
                
            </div>
        </section>
    )
}