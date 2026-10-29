import { PlantillaLocal, type PlantillaLocalI } from "./PlantillaLocal"

const dataLaMolinaLocal: PlantillaLocalI = {
    distrito: "La Molina",
    data: {
        item1: {
            localNombre: "BurgerFriend Good",
            direccion: "La Merced de Lima",
            telefono: "7852345",
            horaInicioLaV: "8:00",
            horaFinLaV: "8:00",
            horaInicioDom: "8:00",
            horaFinDom: "5:00",
            autoInicioLaV: "7:30",
            autoFinLaV: "8:30",
            autoInicioDom: "8:00",
            autoFinDom: "6:30"
        },
        item2: {
            localNombre: "BurgerFriend Wow",
            direccion: "La Alameda del Valle",
            telefono: "7852345",
            horaInicioLaV: "8:00",
            horaFinLaV: "8:00",
            horaInicioDom: "8:00",
            horaFinDom: "5:00",
            autoInicioLaV: "7:30",
            autoFinLaV: "8:30",
            autoInicioDom: "8:00",
            autoFinDom: "6:30"
        },
        item3: {
            localNombre: "BurgerFriend Nice",
            direccion: "El Topacio del Camino",
            telefono: "7852345",
            horaInicioLaV: "8:00",
            horaFinLaV: "8:00",
            horaInicioDom: "8:00",
            horaFinDom: "5:00",
            autoInicioLaV: "7:30",
            autoFinLaV: "8:30",
            autoInicioDom: "8:00",
            autoFinDom: "6:30"
        },
        item4: {
            localNombre: "BurgerFriend Up",
            direccion: "El Roble del Campo",
            telefono: "6852545",
            horaInicioLaV: "8:00",
            horaFinLaV: "8:00",
            horaInicioDom: "8:00",
            horaFinDom: "5:00",
            autoInicioLaV: "7:30",
            autoFinLaV: "8:30",
            autoInicioDom: "8:00",
            autoFinDom: "6:30"
        }
    },
    borderBottom: true
}

export const LaMolinaLocal = () => {
    return (
        <PlantillaLocal distrito={dataLaMolinaLocal.distrito} borderBottom={dataLaMolinaLocal.borderBottom} data={dataLaMolinaLocal.data}/>
    )
}