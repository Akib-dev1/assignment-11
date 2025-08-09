import React, { use } from "react";
import { Link, NavLink } from "react-router";
import { AuthContext } from "./AuthProvidor";

const Navbar = () => {
  const { user, logout } = use(AuthContext);
  return (
    <div className="bg-[#FFFFFF] shadow-lg">
      <div className="navbar w-11/12 md:w-9/12 mx-auto">
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
              className="menu menu-sm dropdown-content bg-[#FFFFFF] rounded-box z-1 mt-3 w-52 p-2 text-[#28283C] shadow-xl"
            >
              <li>
                <NavLink to="/" className="text-base font-semibold">
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink to="/services" className="text-base font-semibold">
                  Services
                </NavLink>
              </li>
              {user && (
                <>
                  <li>
                    <NavLink
                      to="/addservice"
                      className="text-base font-semibold"
                    >
                      Add Service
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      to="/myservices"
                      className="text-base font-semibold"
                    >
                      My Services
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      to="/myreviews"
                      className="text-base font-semibold"
                    >
                      My Reviews
                    </NavLink>
                  </li>
                </>
              )}
              <li>
                <NavLink to="/about" className="text-base font-semibold">
                  About
                </NavLink>
              </li>
              {!user && (
                <>
                  <li>
                    <Link
                      to="/login"
                      className="btn mb-2 bg-inherit hover:bg-[#FF008A] btn-outline text-base hover:text-white"
                    >
                      Log In
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/register"
                      className="btn bg-[#FF008A] text-base text-white"
                    >
                      Register
                    </Link>
                  </li>
                </>
              )}
            </ul>
          </div>
          <a
            href="/"
            className="btn btn-ghost no-underline text-3xl font-extrabold"
          >
            <span className="text-[#FF008A] font-extrabold cursor-pointer">
              Serv<span className="text-[#28283C] ml-1">View</span>
            </span>
          </a>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1 text-[#28283C] font-semibold text-xl">
            <li>
              <NavLink to="/">Home</NavLink>
            </li>
            <li>
              <NavLink to="/services">Services</NavLink>
            </li>
            {user && (
              <>
                <li>
                  <NavLink to="/addservice">Add Service</NavLink>
                </li>
                <li>
                  <NavLink to="/myservices">My Services</NavLink>
                </li>
                <li>
                  <NavLink to="/myreviews">My Reviews</NavLink>
                </li>
              </>
            )}
            <li>
              <NavLink to="/about">About</NavLink>
            </li>
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
                    className="btn bg-[#FF008A] text-white mt-1"
                    onClick={logout}
                  >
                    Logout
                  </button>
                </li>
              </ul>
            </div>
          ) : (
            <div className="flex max-sm:hidden gap-2.5">
              <Link
                to="/login"
                className="btn bg-inherit hover:bg-[#FF008A] btn-outline hover:text-white"
              >
                Log In
              </Link>
              <Link to="/register" className="btn bg-[#FF008A] text-white">
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
