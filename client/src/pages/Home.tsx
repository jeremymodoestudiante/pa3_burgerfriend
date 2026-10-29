import { AppBg } from "../components/AppBg"
import { Atributos } from "../home/Atributos"
import { Captura } from "../home/Captura"
import Hero from "../home/Hero"
import Menu from "../home/Menu"
import { Review } from "../home/Review"
import Servicio from "../home/Servicio"
import { Story } from "../home/Story"

export const Home = () => {
    return (
        <>
        <Hero/>
        <Servicio/>
        <Menu/>
        <Review/>
        <Story/>
        <Atributos/>
        <Captura/>
        <AppBg fondito={"bg-fondito"}/>
        </>
    )
}