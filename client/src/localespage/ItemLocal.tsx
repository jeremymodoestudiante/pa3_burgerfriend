import { faArrowRight, faChevronDown, faChevronUp } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { useState } from "react";

export interface ItemLocalI {
    localNombre: string;
    direccion: string;
    telefono: string;
    horaInicioLaV: string;
    horaFinLaV: string;
    horaInicioDom: string;
    horaFinDom: string; 
    autoInicioLaV: string;
    autoFinLaV: string;
    autoInicioDom: string;
    autoFinDom: string;
}

export const ItemLocal = ({localNombre, direccion, telefono, horaInicioLaV, horaFinLaV, horaInicioDom, horaFinDom, autoInicioLaV, autoFinLaV, autoInicioDom, autoFinDom}: ItemLocalI) => {

    const [isPressed, setIsPressed] = useState<boolean>(false);

    return (
        <div className="bg-fondito rounded-2xl p-8 flex flex-col gap-4 h-fit">
            <h3 className="font-primary text-accent text-2xl">
                {localNombre}
            </h3>
            <div className="flex flex-col gap-3 ">
                <p className="text-text font-secondary text-base lg:text-lg">
                    {direccion}
                </p>
                <p className="text-text font-secondary text-base lg:text-lg">
                    (+51) {telefono.substring(0, 3)}-{telefono.substring(3)}
                </p>
                <button className="text-text font-bold font-secondary flex flex-row gap-2 cursor-pointer text-base lg:text-lg"
                onClick={() => setIsPressed(!isPressed)}>
                    <span>
                        <FontAwesomeIcon icon={isPressed ? faChevronUp : faChevronDown}/>
                    </span>
                    Ver Detalles
                </button>
                {isPressed && (
                    <div className="text-text font-secondary text-base lg:text-lg flex flex-col gap-4 transition-discrete">
                        <div className="flex flex-col gap-1 text-base lg:text-lg">
                            <p>
                                Lun-Sab {horaInicioLaV}am - {horaFinLaV}pm
                            </p>
                            <p>
                                Dom {horaInicioDom}am - {horaFinDom}pm
                            </p>
                        </div>
                        <div className="flex flex-col text-base lg:text-lg">
                            <p>
                                Auto servicio:
                            </p>
                        </div>
                        <div className="flex flex-col gap-1 text-base lg:text-lg">
                            <p>
                                Lun-Sab {autoInicioLaV}am - {autoFinLaV}pm
                            </p>
                            <p>
                                Dom {autoInicioDom}am - {autoFinDom}pm
                            </p>
                        </div>
                    </div>
                )}
            </div>

            <div className="flex flex-row gap-6">
                <p className="text-text font-primary border-b border-text w-fit py-2 cursor-pointer hover:scale-115 transition-all duration-150 ease-out">
                    Ordena Ya
                </p>
                <p className="text-text font-primary border-b border-text w-fit py-2 cursor-pointer hover:scale-115 transition-all duration-150 ease-out flex flex-row gap-2">
                    Dirección
                    <span>
                        <FontAwesomeIcon icon={faArrowRight}/>
                    </span>
                </p>
            </div>
        </div>
    )
}