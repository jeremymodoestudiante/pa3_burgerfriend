import { ItemLocal, type ItemLocalI } from "./ItemLocal";

export interface PlantillaLocalI {
    distrito: string;
    data: {
        item1: ItemLocalI,
        item2: ItemLocalI,
        item3: ItemLocalI,
        item4: ItemLocalI
    }
    borderBottom: boolean;
}

export const PlantillaLocal = ({distrito, data, borderBottom}: PlantillaLocalI) => {
    return (
        <section className="bg-secondary">
            <div className={`max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-12 py-24 px-4 ${borderBottom ? "border-b border-text/10" : "border-none"}`}>
                <h2 className="font-primary text-text text-4xl md:text-5xl lg:text-6xl col-span-1">
                    {distrito}
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 col-span-2">
                    <ItemLocal localNombre={data.item1.localNombre} direccion={data.item1.direccion} telefono={data.item1.telefono} horaInicioLaV={data.item1.horaInicioLaV} horaFinLaV={data.item1.horaFinLaV} horaInicioDom={data.item1.horaInicioDom} horaFinDom={data.item1.horaFinDom} autoInicioLaV={data.item1.autoInicioLaV} autoFinLaV={data.item1.autoFinLaV} autoInicioDom={data.item1.autoInicioDom} autoFinDom={data.item1.autoFinDom}/>
                    <ItemLocal localNombre={data.item2.localNombre} direccion={data.item2.direccion} telefono={data.item2.telefono} horaInicioLaV={data.item2.horaInicioLaV} horaFinLaV={data.item2.horaFinLaV} horaInicioDom={data.item2.horaInicioDom} horaFinDom={data.item2.horaFinDom} autoInicioLaV={data.item2.autoInicioLaV} autoFinLaV={data.item2.autoFinLaV} autoInicioDom={data.item2.autoInicioDom} autoFinDom={data.item2.autoFinDom}/>
                    <ItemLocal localNombre={data.item3.localNombre} direccion={data.item3.direccion} telefono={data.item3.telefono} horaInicioLaV={data.item3.horaInicioLaV} horaFinLaV={data.item3.horaFinLaV} horaInicioDom={data.item3.horaInicioDom} horaFinDom={data.item3.horaFinDom} autoInicioLaV={data.item3.autoInicioLaV} autoFinLaV={data.item3.autoFinLaV} autoInicioDom={data.item3.autoInicioDom} autoFinDom={data.item3.autoFinDom}/>
                    <ItemLocal localNombre={data.item4.localNombre} direccion={data.item4.direccion} telefono={data.item4.telefono} horaInicioLaV={data.item4.horaInicioLaV} horaFinLaV={data.item4.horaFinLaV} horaInicioDom={data.item4.horaInicioDom} horaFinDom={data.item4.horaFinDom} autoInicioLaV={data.item4.autoInicioLaV} autoFinLaV={data.item4.autoFinLaV} autoInicioDom={data.item4.autoInicioDom} autoFinDom={data.item4.autoFinDom}/>
                </div>
            </div>
        </section>
    )
}