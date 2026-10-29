import { faHamburger, faSmile, faSackDollar} from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { IconFranquicia, type IconFranquiciaI } from "./IconFranquicia";



const IconFranquiciaMock = () => {
    return (
        <div className="flex flex-row gap-4">
                    <div className="p-3 rounded-full border-2 border-text text-3xl h-fit">
                        <FontAwesomeIcon icon={faHamburger}/>
                    </div>
                    <div className="flex flex-col gap-4">
                        <p className="font-primary text-2xl">
                            Comida de calidad
                        </p>
                        <p className="font-secondary text-lg max-w-80">
                            La mejor comida en el mejor restaurante. Comida de calidad comprobada.
                        </p>
                    </div>
                </div>
    )
}

const dataIconosFranquicia: IconFranquiciaI[] = [
    {
        icon: faHamburger,
        titulo: "Comida de calidad",
        descripcion: "La mejor comida en el mejor restaurante. Comida de calidad."
    },
    {
        icon: faSackDollar,
        titulo: "Precios cómodos",
        descripcion: "Lo mejor no tiene que ser caro. Platillos al alcance del bolsillo."
    },
    {
        icon: faSmile,
        titulo: "Amistad duradera",
        descripcion: "Disfruta tu hamburguesa con un amigo. Pásenla bien comiendo juntos."
    }
]

export const IconosFranquicia = () => {
    return (
        <section className="bg-primary px-4">
            <div className="max-7-xl mx-auto py-24 grid grid-cols-1 md:grid-cols-3 text-text gap-4">
                {dataIconosFranquicia.map(({icon, titulo, descripcion}) => (
                    <IconFranquicia icon={icon} titulo={titulo} descripcion={descripcion} key={titulo}/>
                ))}
            </div>
        </section>
    )
}