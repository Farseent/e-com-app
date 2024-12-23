import axios from "axios";

const UserURL = "http://localhost:5000/users";
const OrderURL = "http://localhost:5000/orders";
const ProductURL = "http://localhost:5000/products";

export const getAllUsers = async () => {
    return await axios.get(UserURL);
    
}

export const getAllOrders = async () => {
    return await axios.get(OrderURL);
    
}

export const addProduct = async (product) => {
    return await axios.post(ProductURL,product);
}

export const editProduct = async (id,product) => {
    return await axios.put(`${ProductURL}/${id}`,product);
}