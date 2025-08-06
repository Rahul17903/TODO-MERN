import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";
const Header = () => {
  const userToken = localStorage.getItem("token");
  return (
    <div className="bg-[#121232] text-[#d8d8d8] flex flex-row px-20  text-lg justify-between py-3">
      <div className="font-semibold flex items-center">NotePad</div>
      <ul className="flex items-center gap-7">
        <Link to="/add-note">
          <li className="hover:text-white cursor-pointer">Create-Note</li>
        </Link>
        <Link to="/">
          <li className="hover:text-white cursor-pointer">Contact Us</li>
        </Link>
      </ul>
      <div className="flex items-center gap-7">
        {!userToken ? (
          <>
            <Link to="/login">
              <button className="bg-green-600 hover:bg-green-700 px-3 py-1 rounded-md">
                Login
              </button>
            </Link>
            <Link to="/register">
              <button className="bg-blue-700 hover:bg-blue-800 px-3 py-1 rounded-md">
                SignUp
              </button>
            </Link>
          </>
        ) : (
          <button
            onClick={() => {
              localStorage.removeItem("token");
              window.location.href = "/login";
            }}
            className="text-white bg-red-600 hover:bg-red-700 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-4 py-2 mr-2"
          >
            Logout
          </button>
        )}
      </div>
    </div>
  );
};

export default Header;
