import React, { useRef, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { useAuthenticationContext } from "../../contexts/AuthenticationContextProvider";
import { LoggedInNavbar } from "./LoggedInNavbar";
import { LoggedOutNavbar } from "./LoggedOutNavbar";
import { Search } from "../Search";

export const Navbar = () => {
  const navbar = useRef(null);
  const location = useLocation();
  const { isLoggedIn } = useAuthenticationContext();
  const [showMenu, setShowMenu] = useState(true);

  const toggleNavbar = () => {
    setShowMenu(!showMenu);
  };

  return (
    <nav
      ref={navbar}
      className="sticky top-0 z-10 w-full rounded border-b-2 border-[#F2F2F2] bg-white bg-opacity-100 px-6 py-4 sm:px-4"
    >
      <div className="container mx-auto flex flex-wrap items-center justify-between">
        <div className="flex items-center gap-10">
          <Link
            to="/"
            className="select-none self-center whitespace-nowrap text-4xl font-semibold text-off-black"
          >
            Borrow<span className="text-purple-500">T</span>
          </Link>

          {location.pathname === "/" && <Search />}
        </div>
        <button
          data-collapse-toggle="mobile-menu"
          onClick={toggleNavbar}
          type="button"
          className="ml-3 inline-flex items-center rounded-lg p-2 text-sm text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 md:hidden"
          aria-controls="mobile-menu-2"
          aria-expanded="false"
        >
          <span className="sr-only">Open main menu</span>
          <svg
            className="h-6 w-6"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
              clipRule="evenodd"
            ></path>
          </svg>
          <svg
            className="hidden h-6 w-6"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
              clipRule="evenodd"
            ></path>
          </svg>
        </button>

        {isLoggedIn ? (
          <LoggedInNavbar show={showMenu} />
        ) : (
          <LoggedOutNavbar show={showMenu} />
        )}
      </div>
    </nav>
  );
};
