import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {faPlay} from "@fortawesome/free-solid-svg-icons";
import storyp from "../assets/story/storyp.webp";

export const Story = () => {
    return (
        <section className="bg-fondito py-8 px-4">
            <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 items-center gap-20">

                <div className="flex flex-col gap-6 lg:gap-8">
                    <h1 className="font-primary text-text text-4xl lg:text-5xl">
                        La misma calidad desde 2008
                    </h1>
                    <p className="font-secondary text-text text-md lg:text-xl">
                        Somos una cadena de hamburguesas que ha perdurado por casi dos décadas. La fidelidad de nuestros clientes y la calidad de nuestro servicio explican la razón.
                    </p>
                    <div className="flex items-center">
                        <a href="#" className="font-primary text-text text-xl bg-fondito px-9 py-3 border-2 border-text rounded-2xl shadow-text hover:scale-110 transition-all duration-300 ease-out w-full text-center md:w-fit">
                            Saber más
                        </a>
                    </div>
                </div>

                <div className="rounded-3xl overflow-hidden border-2 border-text shadow-text">
                    <figure className="flex relative h-80 md:h-94 lg:h-fit">
                        <img src={storyp} alt="burger" className="object-cover w-full h-full"/>
                        <div className="absolute w-full h-full">
                            <div className="absolute inset-0 m-auto w-fit h-fit text-text border-3 border-text px-6 py-6 text-3xl md:text-5xl rounded-3xl hover:scale-110 cursor-pointer transition-all duration-150 ease-out bg-fondito">
                            <FontAwesomeIcon icon={faPlay}/>
                            </div>
                        </div>
                    </figure>
                </div>

            </div>
        </section>
    )
}