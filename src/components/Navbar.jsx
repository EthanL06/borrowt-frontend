import React, { useRef } from "react";
import { Search } from "./Search";
import { Button } from "./Button";
import { Profile } from "./Profile";

export const Navbar = () => {
  const mobileMenu = useRef(null);

  const openNavbar = () => {
    mobileMenu.current.classList.toggle("hidden");
  };

  return (
    <nav className="sticky rounded border-b-2 border-[#F2F2F2] bg-white px-6 py-4 dark:bg-gray-800 sm:px-4">
      <div className="container mx-auto flex flex-wrap items-center justify-between">
        <div className="flex items-center gap-10">
          <a
            href="/"
            className="self-center whitespace-nowrap text-4xl font-semibold text-off-black dark:text-white"
          >
            Borrow<span className="text-purple-500">T</span>
          </a>

          <Search />
        </div>
        <button
          data-collapse-toggle="mobile-menu"
          onClick={openNavbar}
          type="button"
          className="ml-3 inline-flex items-center rounded-lg p-2 text-sm text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600 md:hidden"
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
              fill-rule="evenodd"
              d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
              clip-rule="evenodd"
            ></path>
          </svg>
          <svg
            className="hidden h-6 w-6"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill-rule="evenodd"
              d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
              clip-rule="evenodd"
            ></path>
          </svg>
        </button>
        <div
          ref={mobileMenu}
          className="hidden w-full md:block md:w-auto"
          id="mobile-menu"
        >
          <ul className="mt-4 flex flex-col items-center gap-5 md:mt-0 md:flex-row md:space-x-8 md:text-sm md:font-medium">
            <li>
              <a href="/">
                <Button text={"Sell NFT"} color={"#22C55E"} />
              </a>
            </li>
            <li>
              <a href="/">
                <Profile />
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};
