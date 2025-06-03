import React, { use } from "react";
import { Link, NavLink } from "react-router";
import { AuthContext } from "./AuthProvidor";

const Navbar = () => {
  const { user, logout } = use(AuthContext);
  return (
    <div>
      <div className="navbar bg-[#002B36] shadow-sm">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {" "}
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />{" "}
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-[#002B36] rounded-box z-1 mt-3 w-52 p-2 shadow text-[#94D2BD]"
            >
              <li>
                <NavLink to="/">Home</NavLink>
              </li>
              <li>
                <NavLink to="/services">Services</NavLink>
              </li>
            </ul>
          </div>
          <a href="#" className="btn btn-link no-underline text-2xl">
            <span className="text-[#005F73] font-bold cursor-pointer">
              Serv<span className="text-[#94D2BD]">View</span>
            </span>
          </a>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1 text-[#94D2BD]">
            <li>
              <NavLink to="/">Home</NavLink>
            </li>
            <li>
              <NavLink to="/services">Services</NavLink>
            </li>
            {user && (
              <>
                <li>
                  <NavLink to="/myreviews">My Reviews</NavLink>
                </li>
                <li>
                  <NavLink to="/addservice">Add Service</NavLink>
                </li>
              </>
            )}
          </ul>
        </div>
        <div className="navbar-end">
          {user ? (
            <div className="dropdown dropdown-end">
              <div className="avatar cursor-pointer" tabIndex={0} role="button">
                <div
                  className="w-12 rounded-full"
                  data-tooltip-id="userName"
                  data-tooltip-content={user.displayName}
                >
                  <img src={user.photoURL} />
                </div>
              </div>
              <ul
                tabIndex={0}
                className="dropdown-content menu bg-base-100 rounded-box z-1 w-52 p-2 shadow-sm"
              >
                <li>
                  <button
                    className="btn btn-success text-black mt-1"
                    onClick={logout}
                  >
                    Logout
                  </button>
                </li>
              </ul>
            </div>
          ) : (
            <div className="flex gap-2.5">
              <Link to="/login" className="btn btn-outline btn-success">
                Log In
              </Link>
              <Link to="/register" className="btn btn-success">
                Register
              </Link>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
