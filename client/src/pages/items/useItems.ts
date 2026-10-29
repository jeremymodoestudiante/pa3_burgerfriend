import { useQuery, useMutation } from "@tanstack/react-query";
import { addItem, deleteItem, fetchItems, updateItem } from "../../services/item.service";

export const useItems = () => useQuery({
    queryKey: ['getItems'],
    queryFn: ({signal}) => fetchItems(signal)
});

export const useMutationPost = () => useMutation({
    mutationFn: addItem
})

export const useMutationPut = () => useMutation({
    mutationFn: updateItem
})

export const useMutationDelete = () => useMutation({
    mutationFn: deleteItem
})