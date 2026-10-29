import { HeroPlantilla } from "../components/HeroPlantilla"

const Buttoncito = () => {
    return (
        <div className="w-full flex flex-row justify-center">
        <button className="font-primary text-fondito bg-accent px-8 py-3 border-2 border-text rounded-xl shadow-text hover:scale-105 transition-all duration-150 ease-out text-xl cursor-pointer">
            Formulario de Negocios
        </button>
        </div>
    )
}

export const HeroFranquicia = () => {
    return (
        <HeroPlantilla titulo={"Franquicia"} descripcion={"Haz negocios con nosotros. Ten tu propio establecimiento BurgerFriend y comparte la experiencia más sabrosa de todo el país."} elementoExtra={<Buttoncito/>}/>
    );
}