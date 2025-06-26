import React, { useContext } from "react";
import { Link, NavLink } from "react-router";
import { AuthContext } from "../Auth/AuthContext";
import Swal from "sweetalert2";
import ThemeToggle from "./ThemeToggle";

const Navbar = () => {
  const { user, logout } = useContext(AuthContext);

  const handleLogout = async () => {
    Swal.fire({
      title: "Are you sure?",
      text: "You will be logged out!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, logout!",
    }).then(async (result) => {
      if (result.isConfirmed) {
        try {
          await logout();
          Swal.fire({
            title: "Logged out!",
            text: "You have successfully logged out.",
            icon: "success",
            timer: 1500,
            showConfirmButton: false,
          });
        } catch (error) {
          Swal.fire({
            title: "Error!",
            text: `Logout failed: ${error.message}`,
            icon: "error",
          });
        }
      }
    });
  };

  return (
    <div className="navbar bg-base-100 shadow-sm">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost mr-0 lg:hidden">
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
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
          >
            <li>
              <NavLink to="/" className="btn">
                Home
              </NavLink>
            </li>
            <li>
              <NavLink to="/all-recipes" className="btn">
                All Recipes
              </NavLink>
            </li>

            <li>
              <NavLink to="/add-recipes" className="btn">
                Add Recipes
              </NavLink>
            </li>
            <li>
              <NavLink to="/my-recipes" className="btn">
                My Recipes
              </NavLink>
            </li>
          </ul>
        </div>

        <Link
          to="/"
          className="min-md:ml-4 bg-transparent border-0  max-md:text-base max-md:pr-3 max-md:pl-1 rounded-lg font-extrabold  text-2xl"
        >
          <span  >Food</span><span className="text-yellow-500 font-extrabold">KhaZana</span>
        </Link>
      </div>

      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1 flex gap-3">
          <li>
            <NavLink to="/" className="btn border border-primary">
              Home
            </NavLink>
          </li>
          <li>
            <NavLink to="/all-recipes" className="btn border border-primary ">
              All Recipes
            </NavLink>
          </li>

          <li>
            <NavLink to="/add-recipes" className="btn border border-primary">
              Add Recipes
            </NavLink>
          </li>
          <li>
            <NavLink to="/my-recipes" className="btn border border-primary">
              My Recipes
            </NavLink>
          </li>
        </ul>
      </div>

      <div className="navbar-end  ">
        <ThemeToggle ></ThemeToggle>
        {!user ? (
          <>
            <ul className=" ml-3 flex gap-3 ">
              <li>
                <NavLink to="/login" className="btn border border-primary max-md:text-sm max-md:p-1 ">
                  Login
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/register"
                  className="btn border border-primary max-md:text-sm max-md:p-1"
                >
                  Register
                </NavLink>
              </li>
            </ul>
          </>
        ) : (
          <>
            <button
              onClick={handleLogout}
              className="btn btn-ghost ml-3 border-red-500"
            >
              Logout
            </button>
            <div
              tabIndex={0}
              role="button"
              className="btn btn-ghost btn-circle avatar ml-2 tooltip tooltip-left"
              data-tip={user.displayName || "User"}
            >
              <div className="w-10 rounded-full">                
                  <img alt="User" src={user.photoURL || "/images/imgnf.png"} />
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default Navbar;
