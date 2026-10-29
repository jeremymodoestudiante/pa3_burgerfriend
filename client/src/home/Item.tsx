import { QueryClient, QueryClientProvider, useQuery } from "@tanstack/react-query";

export interface ItemI {
        _id: number;
        nombre: string;
        descripcion: string;
        categoria: string;
        stock: number;
        precio: number;
        estado: boolean;
}

const queryClient = new QueryClient();

export const ItemContent = () => {

    const {data = [], isPending} = useQuery<ItemI[]>({
        queryKey: ["Envios"],
        queryFn: () => fetch("http://localhost:3001/api/items").then(r => r.json())
    });

    return (
        <section className="h-fit lg:min-h-screen bg-fondito py-8">
            <div className="max-w-7xl mx-auto flex flex-col gap-8 lg:gap-5 items-center lg:items-start lg:justify-start justify-center">

            <h1 className="font-primary text-primary text-delineadito md:text-delineado text-5xl lg:text-6xl lg:py-6 text-shadow-sombrita">Items</h1>

            {isPending ? (
                <h2>Cargando...</h2>
            ) : (
            <div className="flex flex-col items-center justify-center w-full overflow-x-scroll lg:overflow-auto lg:pb-28">
            <table className=" rounded-2xl border-collapse w-[95%] lg:w-[75%] mx-auto shadow-2xl font-secondary overflow-hidden">
                <thead>
                    <tr className=" text-fondito text-xs text-left uppercase">
                            <th className="bg-text rounded-tl-2xl py-3 px-5 w-[5%] text-center">Id</th>
                            <th className="bg-text py-3 px-5 w-[10%]">Item</th>
                            <th className="bg-text py-3 px-5 w-[20%]">Descripción</th>
                            <th className="bg-text py-3 px-5 w-[20%]">Categoria</th>
                            <th className="bg-text py-3 px-5 w-[25%]">Stock</th>
                            <th className="bg-text py-3 px-5 w-[10%]">Precio</th>
                            <th className="bg-text rounded-tr-2xl py-3 px-5 w-[10%]">Estado</th>
                    </tr>
                </thead>
                <tbody>
                    {data.map(({_id, nombre, descripcion, categoria, stock, precio, estado}) => (
                        <tr key={_id} className="font-secondary text-text text-[10.5px] lg:text-xs uppercase py-4 hover:bg-accent hover:text-primary transition-colors duration-100 ease-out cursor-pointer odd:bg-primary even:bg-primary/49">
                            <td className="py-2 text-center">{_id}</td>
                            <td className="py-2 px-5">{nombre}</td>
                            <td className="py-2 px-5">{descripcion}</td>
                            <td className="py-2 px-5">{categoria}</td>
                            <td className="py-2 px-5">{stock}</td>
                            <td className="py-2 px-5">S/ {precio.toFixed(2)}</td>
                            <td className="py-2 px-5">{estado ? "Activo": "Inactivo"}</td>
                        </tr>
                    ))}
                </tbody>               
            </table>
            </div>
            )}

            </div>
        </section>
    )
}

const Item = () => {
    return (
        <QueryClientProvider client={queryClient}>
            <ItemContent/>
        </QueryClientProvider>
    )
}
export default Item;