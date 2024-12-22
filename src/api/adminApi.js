import axios from "axios";

const UserURL = "http://localhost:5000/users";
const OrderURL = "http://localhost:5000/orders";

export const getAllUsers = async () => {
    return await axios.get(UserURL);
    
}

export const getAllOrders = async () => {
    return await axios.get(OrderURL);
    
}