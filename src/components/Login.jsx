import { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import axios from "axios";
import { useUser } from "../context/UserContext";

const Login = () => {
  const { handleLogin } = useUser(); // Use handleLogin for logging in
  const navigate = useNavigate();
  const [form, setForm] = useState({ email: "", password: "" });
  const [message, setMessage] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      // Send login request to the server
      const { data } = await axios.get("http://localhost:5000/users", {
        params: { email: form.email, password: form.password },
      });

      if (data.length > 0) {
        // Assuming the API returns the user's email and name
        const userEmail = data[0].email;
        const userName = data[0].name;

        handleLogin(userEmail, userName); // Pass both email and name to handleLogin
        navigate("/"); // Redirect to the home page
      } else {
        setMessage("Invalid email or password");
      }
    } catch (error) {
      console.error("Login Error:", error);
      setMessage("An error occurred");
    }
  };

  return (
    <div className="flex justify-center h-screen w-screen items-center">
      <div className="flex flex-col items-center w-[350px] h-auto rounded-lg p-4 border shadow-lg">
        <h1 className="font-bold text-3xl mt-5 font-serif">Login</h1>
        <form className="p-6 w-80" onSubmit={handleSubmit}>
          {message && <p className="text-red-500 ml-[45px]">{message}</p>}
          <input
            type="email"
            placeholder="Email"
            name="email"
            className="font-serif mt-5 border py-2 w-[235px] outline-none pl-2"
            value={form.email}
            onChange={handleChange}
            required
          />
          <input
            type="password"
            placeholder="Password"
            name="password"
            className="font-serif mt-5 border py-2 w-[235px] outline-none pl-2"
            value={form.password}
            onChange={handleChange}
            required
          />
          <NavLink className="mr-32 mt-5 text-sm text-gray-400 font-serif">
            Forget Password?
          </NavLink>
          <button
            type="submit"
            className="bg-blue-600 hover:bg-blue-700 mt-5 text-white py-2 px-16 rounded-full font-semibold ml-[50px]"
          >
            Login
          </button>
        </form>
        <div className="flex font-serif text-sm text-gray-500">
          <p className="mt-2">Not a Member? </p>
          <NavLink to={"/signup"}>
            <h1 className="mt-2 text-blue-600">Sign up</h1>
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default Login;
