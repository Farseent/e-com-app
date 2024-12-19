const UserURL = "http://localhost:5000/users";

export const getAllUsers = () =>{
    return axios.get(UserURL);
}