import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import api from "../../api";

const Register = () => {
  const [form, setForm] = useState({ name: "", email: "", password: "" });
  const navigate = useNavigate()
  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };
   const handleSubmit =(e)=>{
        e.preventDefault()
        try {
            api.post('/auth/register',form)
            alert("WoW your Registration is complete !!")
            navigate('/login')
        } catch (error) {
            console.log(error)
            alert("Registration Failed")
        }

    }
  return (
    <form onSubmit={handleSubmit} className="flex flex-col items-center my-5 m-auto border p-6 gap-3 shadow-sm w-[400px]">
      <h2 className="font-bold text-2xl ">Register Form</h2>
      <input
        type="text"
        placeholder="Enter your Name"
        onChange={handleChange}
        value={form.name}
        name="name"
        className="flex outline-none border w-full p-2 "
      />
      <input
        type="email"
        placeholder="Enter your email"
        onChange={handleChange}
        value={form.email}
        name="email"
        className="flex outline-none border w-full p-2 "
      />
      <input
        type="password"
        placeholder="Enter your password"
        onChange={handleChange}
        value={form.password}
        name="password"
        className="flex outline-none border w-full p-2 "
      />
      <button type="submit" className="bg-green-500 hover:bg-green-600 px-3 py-1 rounded-md">Submit</button>
    </form>
  );
};

export default Register;
