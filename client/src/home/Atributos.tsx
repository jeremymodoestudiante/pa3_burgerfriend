import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faBook, faBurger, faHeart, type IconDefinition } from "@fortawesome/free-solid-svg-icons"

interface AtributoItemI {
    icon: IconDefinition,
    titulo: string;
    descripcion: string;
}

const AtributoData: AtributoItemI[] = [
    {
        icon: faBurger,
        titulo: "Masa Madre",
        descripcion: "Tu comida hecha con la mejor masa del mercado. Alta calidad gourmet."
    },
    {
        icon: faHeart,
        titulo: "Hecho con Amor",
        descripcion: "Nuestros cocineros aman lo que hacen. Sabor que se siente."
    },
    {
        icon: faBook,
        titulo: "Recetas Clásicas",
        descripcion: "Las mejores recetas en el mejor lugar. Clásico pero sabroso."
    }
];

const AtributoItem = ({icon, titulo, descripcion}: AtributoItemI) => {
    return (
        <div className="flex flex-col md:flex-row text-text gap-4 text-center">
            <FontAwesomeIcon icon={icon} className="text-4xl -translate-y-2 mx-auto md:m-0"/>
            <div className="flex flex-col gap-2">
                <p className="font-primary text-2xl">
                    {titulo}
                </p>
                <p className="font-secondary text-lg">
                    {descripcion}
                </p>
            </div>
        </div>
    )
}

export const Atributos = () => {
    return (
        <section className="bg-fondito py-8 px-4">
            <div className="max-w-7xl mx-auto border-t border-text/10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 py-20 gap-12 md:gap-8 lg:gap-18">
                {AtributoData.map(({icon, titulo, descripcion}) => (
                    <AtributoItem key={titulo} icon={icon} titulo={titulo} descripcion={descripcion}/>
                ))}
            </div>
        </section>
    )
}