import React from "react";
import { ReactComponent as Token } from "../assets/token.svg";

export const NFTCard = ({ image, title, desc, price }) => {
  return (
    <a
      href="/"
      className="group flex w-full flex-col items-center justify-around gap-4 overflow-hidden rounded border-2 bg-white py-5 px-7 transition duration-200 ease-linear hover:cursor-pointer hover:shadow-lg sm:h-96 sm:w-72"
    >
      <div className="w-full overflow-hidden rounded-lg">
        <img
          className="h-full w-full object-cover transition duration-300 group-hover:relative group-hover:z-0 group-hover:scale-110"
          src={`${
            !image
              ? "https://lh3.googleusercontent.com/gA4IAtO3zj2xuZDJaRKltyDMZFAbmk7WuNYL1M2OTT404ds9O_qi1IS6hnRq9bZUtjgByZsNAW25WlpdI95me15s6-LV6rsyhfb5OZw=w1400-k"
              : { image }
          }`}
          alt="nft"
        />
      </div>

      <div className="w-full text-left font-montserrat">
        <div className="flex flex-col gap-4">
          <div>
            <div className="text-2xl font-bold hover:underline">
              {!title ? "Lorem ipsum" : { title }}
            </div>
            <div className="text-sm font-medium text-gray-500">
              {!desc
                ? "Lorem ipsum dolor sit amet, consectetuer adipiscing elit..."
                : { desc }}
            </div>
          </div>

          <div className="flex flex-row items-end justify-between">
            <div className="flex flex-row items-center gap-2 transition ease-in-out group-hover:-translate-x-1">
              <Token />
              <div className="font-mont text-2xl font-bold text-purple-600">
                {!price ? "15.21" : { price }}
              </div>
            </div>

            <a className="font-medium text-purple-600 hover:underline" href="/">
              <svg
                className="h-6 w-6 transition ease-in-out group-hover:translate-x-1"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M17 8l4 4m0 0l-4 4m4-4H3"
                ></path>
              </svg>
            </a>
          </div>
        </div>
      </div>
    </a>
  );
};
