import axios from "axios";

const UserURL = "http://localhost:5000/users";

// export const getAllUsers = () =>{
//     return axios.get(UserURL);
// }


export const userCheck = async (email,password) => {
    const res = await axios.get(`${UserURL}?email=${email}&password=${password}`);
    return res.data;
}
export const emailCheck = async (email) => {
    const res = await axios.get(`${UserURL}?email=${email}`);
    return res.data;
}