import { useContext, useEffect } from "react";
import { CrudContext } from "../../context/CrudContext"
import { useItems, useMutationPost, useMutationPut } from "./useItems";

export const ItemsForm = () => {

    //para obtener datos
    const query = useItems();

    //para post 
    const {mutate: createItemMutation, isSuccess: isCreateItemSuccess, isPending, isError: isErrorCreateItem, error: errorCreateItem} = useMutationPost();
    //para put
    const {mutate: updateItemMutation, 
        isSuccess: isUpdateItemSuccess,
        isError: isErrorUpdateItem,
        error: errorUpdateItem
    } = useMutationPut();

    const {
        buttonText, 
        setButtonText,
        id, setId,
        nombre, setNombre, 
        categoria, setCategoria,
        descripcion, setDescripcion,
        precio, setPrecio,
        stock, setStock,
        estado, setEstado,
        titleCrud, setTitleCrud,
        isPut, setIsPut,

    } = useContext(CrudContext);

    const limpiarTodo = () => {
        setNombre("");
        setCategoria("Hamburguesa");
        setDescripcion("");
        setEstado(true);
        setStock(0);
        setPrecio(0);
    }

    const clickRegistrar = (e: React.SubmitEvent<HTMLFormElement>) => {
        //evita que recargue la pagina
        e.preventDefault();
        //si isPut es true, y id tiene un valor, pasamos a actualizar
        console.log(`isPut es ${isPut ? "true": "false"} y id es ${id}`);
        if (isPut && id != ""){
            //actualizamos
            updateItemMutation({
                _id: id,
                nombre: nombre,
                descripcion: descripcion,
                categoria: categoria,
                stock: stock,
                precio: precio,
                estado: estado    
            });
            //volvemos id a ""
            setId("");
            //isPut vuelve a ser false
            setIsPut(false);
            //el titulo vuelve a ser registrar
            setTitleCrud("Registrar Producto");
            //el button vuelve a ser registrar
            setButtonText("Registrar");

            //limpiamos
            limpiarTodo();
            return;       
        }
        
        //creamos el objeto Item
        createItemMutation({
            nombre: nombre,
            descripcion: descripcion,
            categoria: categoria,
            stock: stock,
            precio: precio,
            estado: estado
        });
        limpiarTodo();
    }

    //hacemos uso de un useEffect
    //si hay creación exitoso un cambio en la variable, entonces cambia
    useEffect(() => {
        query.refetch();
    }, [isCreateItemSuccess])

    //hacemos uso de un useEffect
    //si hay actualizacion exitoso un cambio en la variable, entonces cambia
    useEffect(() => {
        query.refetch();
    }, [isUpdateItemSuccess])

    const nombreValue = (value: string) => {
        setNombre(value);
    }
    const descripcionValue = (value: string) => {
        setDescripcion(value);
    }
    const categoriaValue = (value: string) => {
        setCategoria(value);
    }
    const stockValue = (value: string) => {
        setStock(value=="" ? 1 : Number(value));
    }
    const precioValue = (value: string) => {
        setPrecio(value=="" ? 1 : Number(value));
    }
    const estadoValue = (value: boolean) => {
        setEstado(value);
    }

    return (
        <section className="bg-fondito py-8">
            <div className="max-w-7xl mx-auto px-4">

                <h1 className="font-primary text-6xl text-text text-center mb-8">
                    {titleCrud}
                </h1>
                <form onSubmit={(e) => clickRegistrar(e)} className="bg-card rounded-2xl border-2 border-text shadow-text max-w-5xl mx-auto p-10
                flex flex-col gap-6">
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div className="font-secondary text-text flex flex-col gap-2">
                            <label className="font-bold">
                                Nombre
                            </label>
                            <input type="text" placeholder="Nombre"
                            className="bg-input border-2 border-inputborder rounded-2xl p-4 outline-none focus:border-black focus:border transition-all duration-250 ease-in" onChange={(e) => nombreValue(e.target.value)} value={nombre}/>
                        </div>
                        
                        <div className="font-secondary text-text flex flex-col gap-2">
                            <label className="font-bold">
                                Categoria
                            </label>
                            <select className="bg-input border-2 border-inputborder rounded-2xl p-4 outline-none focus:border-black focus:border transition-all duration-250 ease-in" onChange={(e) => categoriaValue(e.target.value)} value={categoria}>
                            <option value={"Hamburguesa"}>
                                Hamburguesa
                            </option>
                            <option value={"Bebida"}>
                                Bebida
                            </option>
                            <option value={"Postre"}>
                                Postre
                            </option>
                            <option value={"Snack"}>
                                Snack
                            </option>
                            </select>
                        </div>
                    </div>

                    <div className="grid grid-cols-1">
                        <div className="font-secondary text-text flex flex-col gap-2 col-span-2">
                            <label className="font-bold">
                                Descripción
                            </label>
                            <input type="text" placeholder="Descripción"
                            className="bg-input border-2 border-inputborder rounded-2xl p-4 outline-none focus:border-black focus:border transition-all duration-250 ease-in" onChange={(e) => descripcionValue(e.target.value)} value={descripcion}/>
                        </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div className="font-secondary text-text flex flex-col gap-2">
                        <label className="font-bold">
                            Stock
                        </label>
                        <input type="number" placeholder="Stock"
                        className="bg-input border-2 border-inputborder rounded-2xl p-4 outline-none focus:border-black focus:border transition-all duration-250 ease-in" onChange={(e) => stockValue(e.target.value)} value={stock}/>
                        </div>

                        <div className="font-secondary text-text flex flex-col gap-2">
                        <label className="font-bold">
                            Precio
                        </label>
                        <input type="number" placeholder="Precio"
                        className="bg-input border-2 border-inputborder rounded-2xl p-4 outline-none focus:border-black focus:border transition-all duration-250 ease-in" onChange={(e) => precioValue(e.target.value)} value={precio}/>
                        </div>
                    </div>
                    
                    
                    <div className="grid grid-cols-2">
                        <div className="font-secondary text-text flex flex-row gap-12 justify-center items-center">
                        <label className="font-bold">
                            ¿Item Activo?
                        </label>
                        <input type="checkbox" onChange={(e) => estadoValue(e.target.checked)} checked={estado}/>
                        </div>

                        <div className="font-secondary text-text flex flex-row gap-4 justify-center items-center">
                            <button type="submit"
                            className="bg-accent text-primary font-bold py-2 px-4 rounded-lg border-2 border-text shadow-buttabtext hover:scale-105 ease-in transition-all duration-150 cursor-pointer">
                                {buttonText}
                            </button>
                        </div>
                    </div>
                    {/*Mensaje de felicitacion si es que se registra correctamente*/}
                    {isCreateItemSuccess && (
                        <div className="font-secondary  py-4 text-text  rounded-2xl">
                            <p className="text-center">
                                Se registró correctamente el item.
                            </p>
                        </div>
                    )}
                    {/*Mensaje de error si es que hubo un error*/}
                    {isErrorCreateItem && (
                        <div className="font-secondary bg-accent py-4 text-primary  rounded-2xl">
                            <p className="text-center">
                                Hubo un error al registrar el item: {errorCreateItem.message}
                            </p>
                        </div>
                    )}

                    {/*Mensaje de felicitacion si es que se actualiza correctamente*/}
                    {isUpdateItemSuccess && (
                        <div className="font-secondary  py-4 text-text  rounded-2xl">
                            <p className="text-center">
                                Se actualizó correctamente el item.
                            </p>
                        </div>
                    )}
                    {/*Mensaje de error si es que hubo un error*/}
                    {isErrorUpdateItem && (
                        <div className="font-secondary bg-accent py-4 text-primary  rounded-2xl">
                            <p className="text-center">
                                Hubo un error al actualizar el item: {errorUpdateItem.message}
                            </p>
                        </div>
                    )}
                </form>
            </div>
        </section>
    )
}