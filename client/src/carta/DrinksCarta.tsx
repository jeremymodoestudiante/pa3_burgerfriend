import { PlantillaCarta, type PlantillaCartaI } from "./PlantillaCarta"
import colanormal from "../assets/carta/drinks/colanormal.webp";
import colazero from "../assets/carta/drinks/colazero.webp";
import colalight from "../assets/carta/drinks/colalight.webp";
import vanimilkshake from "../assets/carta/drinks/vanillamilkshake.webp";
import strawmilksjake from "../assets/carta/drinks/strawberrymilkshake.webp";
import chocomilkshake from "../assets/carta/drinks/chocolatemilkshake.webp";

const dataDrinksCarta: PlantillaCartaI =
    {
        titulo: "Drinks",
        menu: {
            item1: {
                img: colanormal,
                nombre: "Cola Normal",
                precio: 10.50
            },
            item2: {
                img: colazero,
                nombre: "Cola Zero",
                precio: 11.50
            },
            item3: {
                img: colalight,
                nombre: "Cola Light",
                precio: 12.50
            },
            item4: {
                img: vanimilkshake,
                nombre: "Vanilla Milkshake",
                precio: 9.99
            },
            item5: {
                img: strawmilksjake,
                nombre: "Strawberry Milkshake",
                precio: 9.99
            },
            item6: {
                img: chocomilkshake,
                nombre: "Chocolate Milkshake",
                precio: 9.99
            }
        }
    };

export const DrinksCarta = () => {
    return (
        <PlantillaCarta titulo={dataDrinksCarta.titulo} menu={dataDrinksCarta.menu}/>
    )
}