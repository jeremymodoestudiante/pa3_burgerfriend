import { PlantillaCarta, type PlantillaCartaI } from "./PlantillaCarta";
import chickenBurger from "../assets/carta/burgers/chickenburger.webp";
import beefBurger from "../assets/carta/burgers/beefburger.webp";
import cheeseBurger from "../assets/carta/burgers/cheeseburger.webp";
import veganBurger from "../assets/carta/burgers/veganburger.webp";
import doubleCheeseBurger from "../assets/carta/burgers/doublecheeseburger.webp";
import monsterBurger from "../assets/carta/burgers/monsterburger.webp";

const dataBurgersCarta: PlantillaCartaI =
    {
        titulo: "Burgers",
        menu: {
            item1: {
                img: chickenBurger,
                nombre: "Chicken Burger",
                precio: 35.00
            },
            item2: {
                img: beefBurger,
                nombre: "Beef Burger",
                precio: 42.00
            },
            item3: {
                img: cheeseBurger,
                nombre: "Cheese Burger",
                precio: 39.99
            },
            item4: {
                img: veganBurger,
                nombre: "Vegan Burger",
                precio: 25.00
            },
            item5: {
                img: doubleCheeseBurger,
                nombre: "Double Cheese Burger",
                precio: 45.00
            },
            item6: {
                img: monsterBurger,
                nombre: "Monster Burger",
                precio: 49.99
            }
        }
    };

export const BurgersCarta = () => {
    return (
        <PlantillaCarta titulo={dataBurgersCarta.titulo} menu={dataBurgersCarta.menu}/>
    )
}