import { signOut } from "firebase/auth";
import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { Link, useNavigate } from "react-router-dom";
import logo from "../../../images/logos/logo.png";
import CustomLink from "../CustomLink/CustomLink";
import auth from "./../../../firebase.init";
import "./Header.css";

const Header = () => {
  const [user, loading, error] = useAuthState(auth);

  const navigate = useNavigate();

  const signInNavigate = () => navigate("/signin");

  const handleSignOut = () => {
    signOut(auth);
    localStorage.removeItem("accessToken");
  };

  return (
    <nav
      className="relative w-full flex flex-wrap items-center uppercase justify-between py-4 text-gray-500 hover:text-gray-700 focus:text-gray-700 navbar navbar-expand-lg navbar-light
"
    >
      <div className="md:container mx-auto w-full flex flex-wrap items-center justify-between md:px-20 px-6">
        <Link to="/">
          <img src={logo} style={{ height: "50px" }} alt="" loading="lazy" />
        </Link>
        <button
          className="
    navbar-toggler
    text-gray-500
    border-0
    hover:shadow-none hover:no-underline
    py-2
    px-2.5
    bg-transparent
    focus:outline-none focus:ring-0 focus:shadow-none focus:no-underline
  "
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <svg
            aria-hidden="true"
            focusable="false"
            data-prefix="fas"
            data-icon="bars"
            className="w-6"
            role="img"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 448 512"
          >
            <path
              fill="currentColor"
              d="M16 132h416c8.837 0 16-7.163 16-16V76c0-8.837-7.163-16-16-16H16C7.163 60 0 67.163 0 76v40c0 8.837 7.163 16 16 16zm0 160h416c8.837 0 16-7.163 16-16v-40c0-8.837-7.163-16-16-16H16c-8.837 0-16 7.163-16 16v40c0 8.837 7.163 16 16 16zm0 160h416c8.837 0 16-7.163 16-16v-40c0-8.837-7.163-16-16-16H16c-8.837 0-16 7.163-16 16v40c0 8.837 7.163 16 16 16z"
            ></path>
          </svg>
        </button>
        <div
          className="collapse navbar-collapse flex-grow items-center"
          id="navbarSupportedContent"
        >
          <ul className="navbar-nav flex flex-col pl-0 items-center list-style-none ml-auto">
            <li className="nav-item px-2">
              <CustomLink to="/" className="nav-link" aria-current="page">
                Home
              </CustomLink>
            </li>

            <li className="nav-item pr-2">
              <CustomLink className="nav-link p-0" to="/suppliers">
                Suppliers
              </CustomLink>
            </li>
            <li className="nav-item pr-2">
              <CustomLink className="nav-link p-0" to="/blogs">
                Blogs
              </CustomLink>
            </li>
            {user ? (
              <li className="nav-item md:ml-2 mt-0">
                <div className="flex justify-center">
                  <div>
                    <div className="dropdown relative">
                      <a
                        className="dropdown-toggle py-2.5 leading-tight transition duration-150 ease-in-out flex items-center"
                        type="button"
                        id="dropdownMenuButton1d"
                        data-bs-toggle="dropdown"
                        aria-expanded="false"
                      >
                        {user.displayName}
                        <svg
                          aria-hidden="true"
                          focusable="false"
                          data-prefix="fas"
                          data-icon="caret-down"
                          className="w-2 ml-2"
                          role="img"
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 320 512"
                        >
                          <path
                            fill="currentColor"
                            d="M31.3 192h257.3c17.8 0 26.7 21.5 14.1 34.1L174.1 354.8c-7.8 7.8-20.5 7.8-28.3 0L17.2 226.1C4.6 213.5 13.5 192 31.3 192z"
                          ></path>
                        </svg>
                      </a>
                      <ul
                        className="
          dropdown-menu
          min-w-max
          absolute
          bg-white
          text-base
          z-50
          float-left
          py-2
          list-none
          text-left
          rounded-lg
          shadow-lg
          mt-1
          hidden
          m-0
          bg-clip-padding
          border-none
        "
                        aria-labelledby="dropdownMenuButton1d"
                      >
                        <li>
                          <Link
                            to="/addItem"
                            className="
              dropdown-item
              text-sm
              py-2
              px-4
              font-normal
              block
              w-full
              whitespace-nowrap
              bg-transparent
              text-gray-700
              hover:bg-gray-100
            "
                          >
                            Add New Item
                          </Link>
                        </li>
                        <li>
                          <Link
                            className="
              dropdown-item
              text-sm
              py-2
              px-4
              font-normal
              block
              w-full
              whitespace-nowrap
              bg-transparent
              text-gray-700
              hover:bg-gray-100
            "
                            to="/manageInventory"
                          >
                            Manage Inventories
                          </Link>
                        </li>
                        <li>
                          <Link
                            className="
              dropdown-item
              text-sm
              py-2
              px-4
              font-normal
              block
              w-full
              whitespace-nowrap
              bg-transparent
              text-gray-700
              hover:bg-gray-100
            "
                            to="/myItems"
                          >
                            My Items
                          </Link>
                        </li>
                        <hr className="h-0 my-2 border border-solid border-t-0 border-gray-700 opacity-25" />
                        <li>
                          <Link
                            to="/signin"
                            className="
              dropdown-item
              text-sm
              py-2
              px-4
              font-normal
              block
              w-full
              whitespace-nowrap
              bg-transparent
              text-gray-700
              hover:bg-gray-100
            "
                            onClick={handleSignOut}
                          >
                            Sign Out
                          </Link>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </li>
            ) : (
              <li className="nav-item md:ml-4 md:mt-0 mt-4">
                <div className="flex space-x-2 justify-center">
                  <button
                    onClick={signInNavigate}
                    className="signIn inline-block px-6 py-2.5 bg-purple-600 text-white font-medium text-xs leading-tight rounded shadow-md hover:bg-purple-700 hover:shadow-lg focus:bg-purple-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-purple-800 active:shadow-lg transition duration-150 ease-in-out"
                  >
                    Sign In
                  </button>
                </div>
              </li>
            )}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Header;
