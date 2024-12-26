import axios from "axios";

const UserURL = "https://e-app-server.onrender.com/users";
const ProductURL = "https://e-app-server.onrender.com/products";

export const getAllProduct = () =>{
    return axios.get(ProductURL);
}

export const getProductbyId = (ProductId) =>{
    return axios.get(`${ProductURL}/${ProductId}`);
}

export const updateCart = async (userId,cartData) => {
    return axios.put(`${UserURL}/${userId}`,cartData);
}