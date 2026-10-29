import { BurgersCarta } from "../carta/BurgersCarta";
import { DrinksCarta } from "../carta/DrinksCarta";
import { HeroCarta } from "../carta/HeroCarta";
import { SnacksCarta } from "../carta/SnacksCarta";
import { SweetsCarta } from "../carta/SweetsCarta";
import { OfertaCards } from "../components/OfertaCards";

export const Carta = () => {
    return (
        <>
            <HeroCarta/>
            <BurgersCarta/>
            <DrinksCarta/>
            <SweetsCarta/>
            <SnacksCarta/>
            <OfertaCards extraClassName="bg-primary"/>
        </>
    )
}