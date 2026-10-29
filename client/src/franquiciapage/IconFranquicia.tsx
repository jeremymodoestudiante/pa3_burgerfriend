import type { IconDefinition } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

export interface IconFranquiciaI {
    icon: IconDefinition,
    titulo: string;
    descripcion: string;
}

export const IconFranquicia = ({icon, titulo, descripcion}: IconFranquiciaI) => {
    return (
        <div className="flex flex-row gap-4">
                    <div className="p-3 rounded-full border-2 border-text text-3xl h-fit">
                        <FontAwesomeIcon icon={icon}/>
                    </div>
                    <div className="flex flex-col gap-4">
                        <p className="font-primary text-2xl">
                            {titulo}
                        </p>
                        <p className="font-secondary text-lg max-w-80">
                            {descripcion}
                        </p>
                    </div>
        </div>
    )
}