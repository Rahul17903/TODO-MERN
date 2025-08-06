import React, { useEffect, useState } from "react";
import api from "../../api";
import { Link } from "react-router-dom";

const NotesList = () => {
  const token = localStorage.getItem("token");
  const [arr, setArr] = useState([]);

  const fetchData = async () => {
    try {
      const response = await api.get("/auth/notes", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      setArr(response.data);
    } catch (err) {
      alert(err.response?.data?.msg || "Couldn't fetch data");
    }
  };

  const handleDelete = async (id) => {
    try {
      await api.delete(`/auth/notes/${id}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      setArr(arr.filter((note) => note._id !== id));
    } catch (err) {
      alert(err.response?.data?.msg || "Couldn't delete note");
    }
  };
  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="p-7 flex flex-row flex-wrap gap-7 justify-center bg-slate-400 min-h-[91.8vh]">
      {arr.map((notes) => (
        <div
          key={notes._id}
          className="w-[300px] h-fit bg-green-400 text-black border border-black p-3 shadow-md flex flex-col gap-4 rounded-md"
        >
          <h1 className="text-xl font-semibold">{notes.title}</h1>
          <p>{notes.content} </p>
          <div className="flex flex-row justify-around">
            <Link to={`note-edit/${notes._id}`}>
              <button className="bg-white/30 backdrop-blur-xl px-4 py-2 rounded-md shadow-md">
                ✒️ Edit{" "}
              </button>
            </Link>
            <button onClick={() => handleDelete(notes._id)} className="bg-red-500/80 backdrop-blur-xl px-4 py-2 rounded-md shadow-md">
              🫗 Delete
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default NotesList;
