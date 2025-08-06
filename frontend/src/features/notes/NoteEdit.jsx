import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import api from "../../api";

const NoteEdit = () => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const navigate = useNavigate();
  const { id } = useParams(); // ✅ FIXED

  useEffect(() => {
    const fetchNote = async () => {
      try {
        const token = localStorage.getItem("token");
        const res = await api.get(`/auth/notes/${id}`, {
          headers: { Authorization: `Bearer ${token}` },
        });
        setTitle(res.data.title);
        setContent(res.data.content);
      } catch (err) {
        console.error("Failed to load note", err);
      }
    };
    fetchNote();
  }, [id]);

  const handleUpdate = async (e) => {
    e.preventDefault();
    try {
      const token = localStorage.getItem("token");
      await api.put(`/auth/notes/${id}`,
        { title, content },
        { headers: { Authorization: `Bearer ${token}` } }
      );
      navigate("/");
    } catch (err) {
      console.error("Update failed", err);
      alert(err.response?.data?.msg || "Update failed");
    }
    console.log("Sending update:", { title, content });

  };

  return (
    <form
      onSubmit={handleUpdate}
      className="max-w-md mx-auto mt-10 bg-white/30 backdrop-blur-md p-6 rounded-lg shadow-lg space-y-4"
    >
      <h2 className="text-2xl font-semibold text-gray-800">Update your Post</h2>

      <input
        type="text"
        name="title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        placeholder="Enter a title"
        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400 bg-white/60"
      />

      <input
        type="text"
        name="content"
        value={content}
        onChange={(e) => setContent(e.target.value)}
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

export default NoteEdit;
