import axios from "axios";

const UserURL = "http://localhost:5000/users";
const ProductURL = "http://localhost:5000/products";

export const getAllProduct = () =>{
    return axios.get(ProductURL);
}

export const getProductbyId = (ProductId) =>{
    return axios.get(`${ProductURL}/${ProductId}`);
}

export const updateCart = async (userId,cartData) => {
    return axios.put(`${UserURL}/${userId}`,cartData);
}