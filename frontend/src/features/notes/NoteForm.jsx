import React, { useState } from "react";
import api from "../../api";
import { useNavigate } from "react-router-dom";
const NoteForm = () => {
  const token = localStorage.getItem("token");
  const [form, setForm] = useState({ title: "", content: "" });
  const navigate = useNavigate();
  
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await api.post("/auth/notes", form, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      alert(" Your note is created !!");
      navigate("/");
    } catch (err) {
      alert(err.response?.data?.msg || "note created failed");
    }
    console.log(form);
  };
  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="max-w-md mx-auto  bg-white/30 backdrop-blur-md p-6 rounded-lg shadow-lg space-y-4  border"
    >
      <h2 className="text-2xl font-semibold text-gray-800">create a post</h2>

      <input
        type="text"
        name="title"
        value={form.title}
        onChange={handleChange}
        placeholder="Enter a title"
        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400 bg-white/60"
      />

      <input
        type="text"
        name="content"
        value={form.content}
        onChange={handleChange}
        placeholder="Enter your content"
        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400 bg-white/60"
      />

      <button
        type="submit"
        className="w-full bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 transition-colors"
      >
        Submit
      </button>
    </form>
  );
};

export default NoteForm;
