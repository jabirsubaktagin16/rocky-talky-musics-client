import React from "react";
import { Link } from "react-router-dom";
import logo from "../../../images/logos/logo.png";

const Header = () => {
  return (
    <nav
      className="relative w-full flex flex-wrap items-center justify-between py-4 text-gray-500 hover:text-gray-700 focus:text-gray-700 navbar navbar-expand-lg navbar-light
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
              <Link to="/" className="nav-link" aria-current="page">
                Home
              </Link>
            </li>

            <li className="nav-item pr-2">
              <a
                className="nav-link text-gray-500 hover:text-gray-700 focus:text-gray-700 p-0"
                href="#"
              >
                Blog
              </a>
            </li>
            <li className="nav-item md:ml-4 md:mt-0 mt-4">
              <div className="flex space-x-2 justify-center">
                <Link
                  to="/signin"
                  className="inline-block px-6 py-2.5 bg-purple-600 text-white font-medium text-xs leading-tight rounded shadow-md hover:bg-purple-700 hover:shadow-lg focus:bg-purple-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-purple-800 active:shadow-lg transition duration-150 ease-in-out"
                >
                  Sign In
                </Link>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Header;
