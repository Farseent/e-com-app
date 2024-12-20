import { useState } from "react";
import { NavLink} from "react-router-dom";
import { useUser } from "../../context/UserContext";

const Signup = () => {
  // const navigate = useNavigate();
  const [form, setForm] = useState({ name: "", email: "", password: "",role:"user" });
  // const [message, setMessage] = useState("");
  const {handleSignup} = useUser();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const message = await handleSignup(form);
    if (message) alert(message);
    // try {
    //   // Check if the user already exists
    //   const { data } = await axios.get("http://localhost:5000/users", {
    //     params: { email: form.email },
    //   });

    //   if (data.length > 0) {
    //     setMessage("User already exists");
    //   } else {
    //     // Register the new user
    //     await axios.post("http://localhost:5000/users", form);

    //     // Log in the user and redirect to Home
    //     handleLogin(form.email, form.name); // Pass email and name to the context
    //     navigate("/"); // Redirect to home page
    //   }
    // } catch (error) {
    //   console.error("Signup Error:", error);
    //   setMessage("An error occurred during signup. Please try again.");
    // }
  };

  return (
    <div className="flex justify-center h-screen w-screen items-center">
      <div className="flex flex-col items-center w-[350px] h-auto rounded-lg p-4 border shadow-lg">
        <h1 className="font-bold text-3xl mt-5 mb-5 font-serif">SignUp</h1>
        {/* {message && <p className="mt-4 text-red-500">{message}</p>} */}
        <form className="p-6 w-80" onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Enter name"
            className="font-serif mt-5 border py-2 w-[235px] outline-none pl-2"
            value={form.name}
            onChange={handleChange}
            name="name"
            required
          />
          <input
            type="email"
            placeholder="Email"
            className="font-serif mt-5 border py-2 w-[235px] outline-none pl-2"
            value={form.email}
            onChange={handleChange}
            name="email"
            required
          />
          <input
            type="password"
            placeholder="Password"
            className="font-serif mt-5 border py-2 w-[235px] outline-none pl-2"
            value={form.password}
            onChange={handleChange}
            name="password"
            required
          />
          <button
            type="submit"
            className="bg-gradient-to-tr mt-5 py-2 text-white px-16 rounded-full font-semibold bg-blue-600 hover:bg-blue-700 ml-[50px]"
          >
            SignUp
          </button>
        </form>
        <div className="flex font-serif text-sm text-gray-500">
          <p className="mt-5">Have an Account?</p>
          <NavLink to="/login">
            <h1 className="mt-5 text-blue-600">Login</h1>
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default Signup;
