import { ReviewCard } from "../components/ReviewCard";
import rev1 from "../assets/creview/rev1.webp";
import rev2 from "../assets/creview/rev2.webp";
import rev3 from "../assets/creview/rev3.webp";
import rev4 from "../assets/creview/rev4.webp";

export const Review = () => {
    return (
        <section className="bg-fondito py-8 px-4 lg:min-h-screen lg:items-center flex">
            <div className="max-w-7xl mx-auto flex flex-col gap-8">
                <h1 className="font-primary text-text text-4xl lg:text-6xl text-center">
                    Cliente Review
                </h1>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    <ReviewCard text={"Una atencion excelente, me encantó. Solo agreguen más ensalada."} img={rev1} cliente={"Rodrigo Huamán"}/>
                    <ReviewCard text={"Mis mejores días los paso aquí. Con mi hamburguesa soy una mujer feliz."} img={rev2} cliente={"Sofía Vílchez"}/>
                    <ReviewCard text={"Lo que me gusta es la variedad de sabores. Es impresionante el menú de bebidas."} img={rev3} cliente={"Fabián Cabrera"}/>
                    <ReviewCard text={"No me imagino una vida sin comer mi hamburguesa. No sería lo mismo."} img={rev4} cliente={"Carla Pérez"}/>
                </div>
            </div>
        </section>
    )
}