import axios from "axios";

export function getItemsAPI(){
    return axios.get('http://localhost:3000/cart')
}
export function addItemsAPI(items){
    return axios.post('http://localhost:3000/cart',items)
}
export function updateItemsAPI(id,updatedIems){
    return axios.patch(`http://localhost:3000/cart/${id}`,updatedIems)
}
export function deleteItemsAPI(id){
    return axios.delete(`http://localhost:3000/cart/${id}`)
}