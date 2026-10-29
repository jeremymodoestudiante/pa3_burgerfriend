import googlePlay from "../assets/footer/google-play.png";
import appStore from "../assets/footer/app-store.png";
import appBg from "../assets/appbg/appbg.webp";
import burgerFloating from "../assets/appbg/burgerfloating.webp";

type fondos = "bg-fondito" | "bg-primary" | "bg-secondary" | "bg-accent";

interface AppBgI {
    fondito: fondos;
}

export const AppBg = ({fondito}: AppBgI) => {
    return (
        <section className={`relative ${fondito} py-12 md:py-0 lg:h-120 flex justify-center items-center`}>
            <div className="max-w-7xl mx-auto flex flex-col px-4 md:px-0">
                <div className="border-2 border-text shadow-reviewcard lg:h-65 rounded-3xl grid grid-cols-1 md:grid-cols-2 overflow-hidden w-full">
                    <div className="bg-card p-8 md:p-12 flex flex-col gap-8 order-2 md:order-1">
                        <p className="font-primary text-[1.8rem]/10 text-text">
                            Encuentra ofertas únicas en nuestra app.
                        </p>
                        <div className="flex flex-row gap-4">
                            <figure className="h-10 hover:scale-110 transition-all duration-150 ease-out cursor-pointer">
                                <img src={googlePlay} className="w-full h-full object-cover"/>
                            </figure>
                            <figure className="h-10 hover:scale-110 transition-all duration-150 ease-out cursor-pointer">
                                <img src={appStore}
                                className="w-full h-full object-cover"/>
                            </figure>
                        </div>
                    </div>
                    <div className="relative bg-accent flex flex-row justify-center order-1 md:order-2">
                        <div className="absolute w-full h-full flex flex-row justify-center gap-">

                            <div className="mt-auto mb-20 size-30 rounded-full bg-linear-to-br from-white/12 via-white/8 to-accent">

                            </div>
                            <div className="mt-5 size-50 rounded-full bg-linear-to-br from-white/12 via-white/8 to-accent">

                            </div>
                        </div>
                        <figure className="relative h-80">
                            <img src={appBg} className="w-full h-full object-cover"/>
                        </figure>
                    </div>
                </div>
            </div>
            <div className="hidden lg:flex lg:absolute">
                    <figure className="h-full">
                        <img src={burgerFloating} className="h-90"/>
                    </figure>
            </div>
        </section>
    )
}