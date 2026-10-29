export interface Item {
        _id: string;
        nombre: string;
        descripcion: string;
        categoria: string;
        stock: number;
        precio: number;
        estado: boolean;
}

export interface ItemRequest {
        nombre: string;
        descripcion: string;
        categoria: string;
        stock: number;
        precio: number;
        estado: boolean;
}

export interface ItemDelete {
        _id: string;
        nombre: string;
}
