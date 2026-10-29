import { useContext, useEffect } from "react";
import { useItems, useMutationDelete } from "./useItems";
import { CrudContext } from "../../context/CrudContext";
import { type Item, type ItemDelete } from "../../types/Item";


export const ItemsTabla = () => {

    const {
        id, 
        setId,
        nombre,
        setNombre,
        setDescripcion,
        setCategoria,
        setEstado,
        setStock,
        setPrecio,
        isPut, setIsPut, 
        isDelete, setIsDelete,
        buttonText, setButtonText,
        setTitleCrud
    } = useContext(CrudContext);

    //para delete
    const {mutate: deleteItemMutation,
        isSuccess: isDeleteItemSuccess,
        isError: isErrorDeleteItem,
        error: errorDeleteItem
    } = useMutationDelete();

    const clickEliminar = ({_id, nombre}: ItemDelete) => {
        //el estado delete se vuelve true
        setIsDelete(true);
        //id adquiere valor
        setId(_id);
        setNombre(nombre);
          
    }

    const confirmarEliminar = ({_id}: ItemDelete) => {
        deleteItemMutation({
            _id: _id,
            nombre: nombre
        });
        setIsDelete(false);
        setId("");
        setNombre("");
    }

    const rechazarEliminar = () => {
        setIsDelete(false);
        setId("");
        setNombre("");
    }
    //useEffect para que se recargue la lista
    //cuando sea exitosa la eliminacion
    useEffect(() => {
        query.refetch();
    }, [isDeleteItemSuccess])

    const clickEditar = ({_id, nombre, descripcion, categoria, estado, stock, precio}: Item) => {
        setButtonText("Actualizar");
        //id adquiere valor
        setId(_id);

        setNombre(nombre);
        setDescripcion(descripcion);
        setCategoria(categoria);
        setEstado(estado);
        setStock(stock);
        setPrecio(precio);

        //es put porque dimos a editar
        setIsPut(true);
        //titulo
        setTitleCrud("Actualizar Item");

        window.scrollTo({
            top: 170,
            behavior:"smooth"
        })
    }
    const query = useItems();

    if (query.isPending) {
        return (
            <section className="bg-primary">
                <p className="font-primary text-5xl text-text">
                    Cargando...
                </p>
            </section>
        )
    }
    if (query.isError) {
        return (
            <div className="rounded-2xl bg-red-50 p-5 text-red-700">
                <p className="font-semibold">Ocurrio un error</p>
                <p className="text-sm">{query.error.message}</p>
                <button
                onClick={() => query.refetch()}
                className="mt-3 rounded-lg bg-red-600 px-4 py-2 text-sm text-white">
                    Reintentar
                </button>
            </div>
        )
    }

    const items = query.data;
    if (!items || items.length === 0){
        return <p className="font-semibold">No hay items registrados</p>
    }

    return (
        <section className="h-fit bg-fondito px-4">
            <div className="max-w-7xl mx-auto flex flex-col gap-8 lg:gap-5 items-center justify-center">

            <h1 className="font-primary text-primary text-delineadito md:text-delineado text-5xl lg:text-6xl lg:py-6 text-shadow-sombrita">Listado</h1>

            <div className="flex flex-col items-center justify-center w-full overflow-x-scroll lg:overflow-auto lg:pb-28">
            <table className=" rounded-2xl border-collapse w-[95%] lg:max-w-5xl mx-auto shadow-2xl font-secondary overflow-hidden">
                <thead>
                    <tr className=" text-fondito text-xs text-left">
                            <th className="bg-text rounded-tl-2xl py-3 px-5 w-[15%] text-center">Id</th>
                            <th className="bg-text py-3 px-5">Item</th>
                            <th className="bg-text py-3 px-5 ">Descripción</th>
                            <th className="bg-text py-3 px-5">Categoria</th>
                            <th className="bg-text py-3 px-5">Stock</th>
                            <th className="bg-text py-3 px-5">Precio</th>
                            <th className="bg-text py-3 px-5">Estado</th>
                            <th className="bg-text rounded-tr-2xl py-3 px-5">Acciones</th>
                    </tr>
                </thead>
                <tbody>
                    {items.map(({_id, nombre, descripcion, categoria, stock, precio, estado}) => (
                        <tr key={_id} className="font-secondary text-text text-[10.5px] lg:text-xs py-4 odd:bg-primary even:bg-primary/49">
                            <td className="py-3 ps-4">{_id}</td>
                            <td className="py-3 ps-5">{nombre}</td>
                            <td className="py-3 ps-5">{descripcion}</td>
                            <td className="py-3 ps-5">{categoria}</td>
                            <td className="py-3 ps-5">{stock}</td>
                            <td className="py-3 ps-5">S/ {precio.toFixed(2)}</td>
                            <td className="py-3 ps-5">{estado ? "Activo": "Inactivo"}</td>
                            <td className="py-3 ps-5">
                                <div className="flex flex-row gap-4">
                                    <button className="px-1 py-2 border border-text shadow-buttabtext rounded-lg hover:scale-105 transition-all duration-150 ease-in cursor-pointer font-semibold"
                                    onClick={() => clickEditar({
                                        _id: _id,
                                        nombre: nombre,
                                        descripcion: descripcion,
                                        categoria: categoria,
                                        stock: stock,
                                        precio: precio,
                                        estado: estado
                                    })}>
                                        Editar
                                    </button>
                                    <button className="px-1 py-2 border border-text bg-accent text-primary shadow-buttabtext rounded-lg hover:scale-105 transition-all duration-150 ease-in cursor-pointer font-semibold"
                                    onClick={() => clickEliminar({
                                       _id: _id,
                                       nombre: nombre
                                    })}>
                                        Eliminar
                                    </button>
                                </div>
                            </td>
                        </tr>
                    ))}
                </tbody>               
            </table>
            {
                isDelete && (
                    <div className="font-secondary  py-4 text-text  rounded-2xl">
                            <p className="text-center">
                                ¿Seguro que desea eliminar el item {id} de nombre {nombre}?
                            </p>
                            <div className="flex flex-row gap-4 justify-center py-4">
                                <button className="px-8 py-2 border border-text bg-accent text-primary shadow-buttabtext rounded-lg hover:scale-105 transition-all duration-150 ease-in cursor-pointer font-semibold"
                                onClick={() => confirmarEliminar({
                                    _id: id,
                                    nombre: nombre
                                })}>
                                    Sí
                                </button>
                                <button className="px-8 py-2 border border-text shadow-buttabtext rounded-lg hover:scale-105 transition-all duration-150 ease-in cursor-pointer font-semibold"
                                onClick={() => rechazarEliminar()}>
                                    No
                                </button>
                            </div>
                    </div>
                )
            }

            {/*Mensaje de felicitacion si es que se elimina correctamente*/}
                    {isDeleteItemSuccess && (
                        <div className="font-secondary  py-4 text-text  rounded-2xl">
                            <p className="text-center">
                                Se eliminó correctamente el item.
                            </p>
                        </div>
                    )}
                    {/*Mensaje de error si es que hubo un error*/}
                    {isErrorDeleteItem && (
                        <div className="font-secondary bg-accent py-4 text-primary  rounded-2xl">
                            <p className="text-center">
                                Hubo un error al eliminar el item: {errorDeleteItem.message}
                            </p>
                        </div>
                    )}
            </div>

            </div>
        </section>
    )
}