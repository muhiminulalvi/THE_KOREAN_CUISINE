import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../provider/AuthProvider";
import { FaUserCircle } from "react-icons/fa";

const Header = () => {
  const { user, logOut } = useContext(AuthContext);

  const handleLogOut = () => {
    logOut()
    .then()
    .catch()
  }

  return (
    <div className="bg-stone-100">
      <div className="navbar px-4 py-7 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8">
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </label>
            <ul
              tabIndex={0}
              className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
            >
              <li className="font-bold text-2xl">
                <Link to="/">Home</Link>
              </li>
              <li tabIndex={0} className="font-bold text-2xl">
                <Link to="/blog">About</Link>
              </li>
              <li className="font-bold text-2xl">
                <Link to="/blog">Blog</Link>
              </li>
            </ul>
          </div>
          <Link to="/" className="btn btn-ghost normal-case text-3xl font-bold">
            M's Cuisine
          </Link>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
            <li className="font-bold text-2xl">
              <Link to="/">Home</Link>
            </li>
            <li className="font-bold text-2xl">
              <Link to="/blog">About</Link>
            </li>
            <li className="font-bold text-2xl">
              <Link to="/blog">Blog</Link>
            </li>
          </ul>
        </div>
        <div className="navbar-end">
          {user ? (
            <div className="flex items-center justify-end gap-4">
              <label className="tooltip" data-tip={`Hello! ${user?.displayName}`}>
                <div className="w-10 rounded-full">
                  <FaUserCircle size={40}/>
                  
                </div>
              </label>
              <button className="btn" onClick={handleLogOut}>Logout</button>
            </div>
          ) : (
            <Link to="/login">
              <button className="btn btn-warning text-xl font-bold">
                Login
              </button>
            </Link>
          )}
        </div>
      </div>
    </div>
  );
};

export default Header;
