import axios from "axios";

export function fetchProductsAPI(){
    return axios.get('http://localhost:3000/products')
}