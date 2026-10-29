export const BrochureFranquicia = () => {
    return (
        <section className="bg-primary px-4">
            <div className="max-7-xl mx-auto py-24 grid grid-cols-1 md:grid-cols-3 text-text border-b border-text/10">
                <div className="col-span-1 font-primary flex flex-col gap-8">
                    <h3 className="text-5xl">
                        Nuestro Compromiso
                    </h3>
                    <p className="text-xl bg-primary px-6 py-3 rounded-2xl border-2 border-text shadow-text w-fit hover:scale-110 transition-all duration-150 ease-out cursor-pointer">
                        Descargar Brochure
                    </p>
                </div>
                <div className="col-span-2 font-secondary flex flex-row justify-end">
                    <p className="max-w-3xl text-lg">
                        Estamos comprometidos con el bienestar de nuestros clientes. Por ello, no solo brindamos sabores únicos, sino experiencias inolvidables. Nuestros chefs tienen la mentalidad de ofrecer platillos que te permitan conocer cultura y vivir una experiencia de nivel gourmet.
                    </p>
                </div>
            </div>
        </section>
    )
}