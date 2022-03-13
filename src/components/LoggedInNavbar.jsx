import React, { useState, useRef, useEffect } from "react";
import { useAuthenticationContext } from "../contexts/AuthenticationContextProvider";
import { Button } from "./Button";
import { Profile } from "./Profile";

import { ReactComponent as Up } from "../assets/arrow_up.svg";
import { ReactComponent as Down } from "../assets/arrow_down.svg";

export const LoggedInNavbar = (showNavbar) => {
  const profileMenu = useRef(null);
  const mobileMenu = useRef(null);
  const [isProfileOpen, setProfileOpen] = useState(false);
  const { logout } = useAuthenticationContext();

  useEffect(() => {
    mobileMenu.current.classList.toggle("hidden");
  }, [showNavbar]);

  const toggleProfile = () => {
    setProfileOpen(!isProfileOpen);
    profileMenu.current.classList.toggle("hidden");
  };

  return (
    <div
      ref={mobileMenu}
      className={`w-full md:block md:w-auto`}
      id="mobile-menu"
    >
      <ul className="mt-4 flex flex-col items-center gap-5 md:mt-0 md:flex-row md:space-x-8 md:text-sm md:font-medium">
        <li>
          <Button text={"Sell NFT"} color={"#22C55E"} />
        </li>
        <li>
          <div className="relative">
            <div
              className="flex flex-row items-center gap-x-3 hover:cursor-pointer"
              onClick={toggleProfile}
            >
              <Profile />
              {isProfileOpen ? <Down /> : <Up />}
            </div>

            <div
              ref={profileMenu}
              id="dropdown"
              className="absolute top-16 right-0 z-10 hidden w-44 select-none list-none divide-y divide-gray-100 rounded bg-white text-base shadow dark:bg-gray-700"
            >
              <ul className="py-1" aria-labelledby="dropdownButton">
                <li>
                  <a
                    href="/"
                    className="block py-2 px-4 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-200 dark:hover:bg-gray-600 dark:hover:text-white"
                  >
                    NFTs
                  </a>
                </li>
                <li>
                  <a
                    href="/"
                    className="block py-2 px-4 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-200 dark:hover:bg-gray-600 dark:hover:text-white"
                  >
                    Loans
                  </a>
                </li>
                <li>
                  <a
                    href="/"
                    className="block py-2 px-4 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-200 dark:hover:bg-gray-600 dark:hover:text-white"
                  >
                    Settings
                  </a>
                </li>
                <li>
                  <div
                    onClick={logout}
                    className="block border-t-[1px] border-gray-200 py-2 px-4 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-200 dark:hover:bg-gray-600 dark:hover:text-white"
                  >
                    Sign out
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </li>
      </ul>
    </div>
  );
};
