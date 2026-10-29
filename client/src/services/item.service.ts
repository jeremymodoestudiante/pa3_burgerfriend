import type {Item, ItemDelete, ItemRequest} from "../types/Item";

const API_URL = "http://localhost:3001/api/items";

export const fetchItems = async (signal?: AbortSignal): Promise<Item[]> => {
    const response = await fetch(API_URL, {signal});
    const jsonData: Item[] = await response.json();
    if (!response.ok){
        throw new Error(`Error al obtener items: ${response.status} ${response.statusText}}`);
    }
    return jsonData;
}

export const addItem = async (body: ItemRequest) => {
    const res = await fetch(API_URL, {
        method: 'POST',
        body: JSON.stringify(body),
        headers: {
            'Content-Type': 'application/json; charset=UTF-8'
        }
    });
    return res.json();
}

export const updateItem = async (body: Item) => {
    const res = await fetch(`${API_URL}/${body._id}`, {
        method: 'PUT',
        body: JSON.stringify(body),
        headers: {
            'Content-Type': 'application/json; charset=UTF-8'
        }
    });
    return res.json();
}

export const deleteItem = async (body: ItemDelete) => {
    const res = await fetch(`${API_URL}/${body._id}`, {
        method: 'DELETE'
    });
    return res.json();
}