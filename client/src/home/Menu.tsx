import chickenBurger from "../assets/menu/chicken-burger.webp";
import beefBurger from "../assets/menu/beef-burger.webp";
import cheeseBurger from "../assets/menu/cheese-burger.webp";
import veganBurger from "../assets/menu/veg-burger.webp";
import doubleCheeseBurger from "../assets/menu/double-cheese-burger.webp";
import monsterBurger from "../assets/menu/monster-burger.webp";

const Menu = () => {
    return (
    <section className="min-h-screen bg-primary">

        <div className="max-w-7xl mx-auto py-16">

            <div className=" flex flex-col lg:flex-row lg:justify-between items-center gap-5">
                <h1 className="font-primary text-text text-6xl">
                    Menu Básico
                </h1>

                <div className="flex items-center">
                    <a href="#" className="font-primary text-text text-xl bg-primary px-9 py-2 border-2 border-text rounded-2xl shadow-text hover:scale-110 transition-all duration-300 ease-out">
                        Ver Todo
                    </a>
                </div>
            </div>

            <div className="lg:py-12 py-6">

                <div className="grid grid-cols-1 lg:grid-cols-3 items-center justify-center">
                    
                    <div className="flex flex-col items-center lg:border-r border-b border-text/10 pb-8">
                        <figure className="">
                            <img src={chickenBurger} alt="chicken burger" 
                            className="size-80 cursor-pointer hover:scale-110 transition-all duration-300"/>
                        </figure>

                        <div className="flex flex-col items-center gap-5">
                            <p className="font-primary text-2xl text-text uppercase">
                                Chicken Burger
                            </p>
                            <p className="font-primary text-accent text-3xl">
                                S/35.00
                            </p>
                        </div>
                    </div>
                    
                    <div className="flex flex-col items-center lg:border-r border-b border-text/10 pb-8">
                        <figure>
                            <img src={beefBurger} alt="beef burger"
                            className="size-80 cursor-pointer hover:scale-110 transition-all duration-300 ease-out" />
                        </figure>
                        <div className="flex flex-col items-center gap-5">
                            <p className="font-primary text-2xl text-text uppercase">
                                Beef Burger
                            </p>
                            <p className="font-primary text-accent text-3xl">
                                S/42.00
                            </p>
                        </div>
                    </div>

                    <div className="flex flex-col items-center border-b border-text/10 pb-8">
                        <figure>
                            <img src={cheeseBurger} alt="cheese burger"
                            className="size-80 hover:scale-110 transition-all duration-300 ease-out cursor-pointer" />
                        </figure>
                        <div className="flex flex-col items-center gap-5">
                            <p className="font-primary text-2xl text-text uppercase">
                                Cheese Burger
                            </p>
                            <p className="font-primary text-accent text-3xl">
                                S/39.99
                            </p>
                        </div>
                    </div>

                </div>


                <div className="grid grid-cols-1 lg:grid-cols-3 items-center justify-center">
                        <div className="flex flex-col items-center lg:border-r border-b lg:border-b-0 border-text/10 pb-8">
                            <figure>
                                <img src={veganBurger} alt="vegan burger" 
                                className="size-80 hover:scale-110 transition-all duration-300 ease-out cursor-pointer"/>
                            </figure>

                            <div className="flex flex-col items-center gap-5">
                                <p className="font-primary text-2xl text-text uppercase">
                                    Vegan Burger
                                </p>
                                <p className="font-primary text-accent text-3xl">
                                    S/25.00
                                </p>
                            </div>
                        </div>

                        <div className="flex flex-col items-center lg:border-r border-b lg:border-b-0 border-text/10 pb-8">
                            <figure>
                                <img src={doubleCheeseBurger} alt="double cheese burger"  className="size-80 hover:scale-110 transition-all duration-300 ease-out cursor-pointer"/>
                            </figure>

                            <div className="flex flex-col items-center gap-5">
                                <p className="font-primary text-2xl text-text uppercase">
                            Double Burger
                                </p>
                                <p className="font-primary text-accent text-3xl">
                                    S/45.00
                                </p>
                            </div>
                        </div>

                        <div className="flex flex-col items-center pb-8">
                            <figure>
                                <img src={monsterBurger} alt="monster burger" className="size-80 hover:scale-110 transition-all duration-300 ease-out cursor-pointer overflow-hidden"/>
                            </figure>

                            <div className="flex flex-col items-center gap-5">
                                <p className="font-primary text-2xl text-text uppercase">
                                    Monster Burger
                                </p>
                                <p className="font-primary text-accent text-3xl">
                                    S/49.99
                                </p>
                            </div>
                    </div>

                </div>
            </div>
        </div>

    </section>
    )
}
export default Menu;