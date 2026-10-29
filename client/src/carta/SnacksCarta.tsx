import { PlantillaCarta, type PlantillaCartaI } from "./PlantillaCarta"
import popcorn from "../assets/carta/snacks/popcorn.webp";
import potatochips from "../assets/carta/snacks/potatochips.webp";
import cookies from "../assets/carta/snacks/cookies.webp";
import bananachips from "../assets/carta/snacks/bananachips.webp";
import peanutchips from "../assets/carta/snacks/peanutchips.webp";
import granola from "../assets/carta/snacks/granola.webp";

const dataSnacksCarta: PlantillaCartaI = {
    titulo: "Snacks",
    menu: {
        item1: {
            img: popcorn,
            nombre: "Pop Corn",
            precio: 4.99
        },
        item2: {
            img: potatochips,
            nombre: "Potato Chips",
            precio: 7.99
        },
        item3: {
            img: cookies,
            nombre: "Cookies",
            precio: 5.50
        },
        item4: {
            img: bananachips,
            nombre: "Banana Chips",
            precio: 7.50
        },
        item5: {
            img: peanutchips,
            nombre: "Peanut Chips",
            precio: 7.50
        },
        item6: {
            img: granola,
            nombre: "Granola",
            precio: 8.99
        }
    }
}

export const SnacksCarta = () => {
    return (
        <PlantillaCarta titulo={dataSnacksCarta.titulo} menu={dataSnacksCarta.menu}/>
    )
}