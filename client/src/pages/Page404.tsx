import { faArrowLeft, faHome } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link, useNavigate } from "react-router"

export const Page404: React.FC = () => {

    const navigate = useNavigate();

  return (
    <section className="flex md:h-140 items-center justify-center bg-fondito py-16">
      <div className="mx-auto w-full max-w-7xl px-4 text-center">

        <h1
          className="font-primary text-7xl text-text leading-none tracking-tight sm:text-8xl md:text-[8rem]"
          aria-label="Error 404"
        >
          Error 404
        </h1>

        <h2 className="font-primary mt-6 text-xl tracking-tight sm:text-2xl md:text-3xl text-text">
          ¡Vaya, esta hamburguesa no existe!
        </h2>

        <p className="font-secondary mx-auto mt-6 max-w-2xl text-sm leading-7 text-text/90 sm:text-lg sm:leading-8">
          Parece que te has perdido entre nuestros ingredientes. La página que
          buscas no existe, ha cambiado de dirección o ya no está disponible.
          ¡Pero todavía nos queda un pedido por atender!
        </p>

        <div className="mt-10 flex items-center justify-center gap-4 flex-row">
          <Link
            to="/"
            className="flex flex-row gap-2 text-fondito bg-accent px-3 py-4 sm:px-4 sm:py-5 rounded-2xl border-2 border-text shadow-text hover:scale-105 transition-all duration-105 ease-out cursor-pointer font-primary text-xs sm:text-base"
          >
            <span><FontAwesomeIcon icon={faHome}/></span>
            Volver a inicio
          </Link>

          <button
            type="button"
            onClick={() => navigate(-1)}
            className="font-primary px-3 py-4 sm:px-4 sm:py-5 border-2 border-text shadow-text rounded-2xl flex flex-row gap-2 hover:scale-110 transition-all duration-150 ease-out cursor-pointer text-text text-xs sm:text-base"
          >
            <span><FontAwesomeIcon icon={faArrowLeft}/></span>
            Volver atrás
          </button>
        </div>

      </div>
    </section>
  );
};