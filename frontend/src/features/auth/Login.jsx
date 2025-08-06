import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import api from "../../api";

const Login = () => {
  const navigate = useNavigate();
  const [form, setForm] = useState({ email: "", password: "" });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

const handleSubmit = async(e)=>{
        e.preventDefault();
        try {
            const res = await api.post('/auth/login',form)
            localStorage.setItem("token", res.data.token);
            alert(" WoW Login Successfull !!")
            navigate('/')
        } catch (err) {
            alert(err.response?.data?.msg || "Login failed")
        }

    }
  return (
    <form
      onSubmit={handleSubmit}
      className="flex flex-col items-center my-5 m-auto border p-6 gap-3 shadow-sm w-[400px]"
    >
      <h2 className="font-bold text-2xl ">LogIn Form</h2>
      <input
        type="email"
        placeholder="Enter your email"
        name="email"
        value={form.email}
        onChange={handleChange}
        className="flex outline-none border w-full p-2 "
      />
      <input
        type="password"
        placeholder="Enter your password"
        name="password"
        value={form.password}
        onChange={handleChange}
        className="flex outline-none border w-full p-2"
      />
      <button
        type="submit"
        className="bg-green-500 hover:bg-green-600 px-3 py-1 rounded-md"
      >
        Submit
      </button>
    </form>
  );
};

export default Login;
