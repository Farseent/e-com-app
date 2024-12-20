import axios from "axios";

const UserURL = "http://localhost:5000/users";


export const userCheck = async (email,password) => {
    const res = await axios.get(`${UserURL}?email=${email}&password=${password}`);
    return res.data;
}
export const emailCheck = async (email) => {
    const res = await axios.get(`${UserURL}?email=${email}`);
    return res.data.length>0;
}
export const addUser = async (userData) => {
    const res = await axios.post(UserURL,userData);
    return res.data;
}
