import { PlantillaCarta, type PlantillaCartaI } from "./PlantillaCarta";
import bananasplit from "../assets/carta/sweets/bananasplit.webp";
import chococake from "../assets/carta/sweets/chococake.webp";
import neapoicecream from "../assets/carta/sweets/neapoicecream.webp";
import picarones from "../assets/carta/sweets/picarones.webp";
import hotcakes from "../assets/carta/sweets/hotcakes.webp";
import applepie from "../assets/carta/sweets/applepie.webp";

const dataSweetsCarta: PlantillaCartaI = {
    titulo: "Sweets",
    menu: {
        item1: {
            img: bananasplit,
            nombre: "Banana Split",
            precio: 8.99
        },
        item2: {
            img: chococake,
            nombre: "Choco Cake",
            precio: 9.99
        },
        item3: {
            img: neapoicecream,
            nombre: "Neapo Ice Cream",
            precio: 9.99
        },
        item4: {
            img: picarones,
            nombre: "Picarones",
            precio: 7.50
        },
        item5: {
            img: applepie,
            nombre: "Apple Pie",
            precio: 8.50
        },
        item6: {
            img: hotcakes,
            nombre: "Hot Cakes",
            precio: 9.50
        }
    }
}

export const SweetsCarta = () => {
    return (
        <PlantillaCarta titulo={dataSweetsCarta.titulo} menu={dataSweetsCarta.menu}/>
    )
}