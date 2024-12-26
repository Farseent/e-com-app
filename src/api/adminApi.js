import axios from "axios";

const UserURL = "https://e-app-server.onrender.com/users";
const OrderURL = "https://e-app-server.onrender.com/orders";
const ProductURL = "https://e-app-server.onrender.com/products";

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

export const deleteProduct = async (id) => {
    return await axios.delete(`${ProductURL}/${id}`);
}

export const updateUser = async (id,block) => {
    return await axios.patch (`${UserURL}/${id}`,block)
}