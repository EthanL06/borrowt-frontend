import React from "react";
import { ReactComponent as Token } from "../assets/token.svg";
import { Button } from "./Button";

export const NFTCard = ({ image, title, desc, price }) => {
  const truncateText = (text) => {
    if (text.length > 100) {
      return text.substring(0, 100) + "...";
    }
    return text;
  };

  const description = truncateText("" + JSON.stringify(desc));

  return (
    <a
      href="/"
      className="group flex w-full flex-col items-center justify-around gap-4 overflow-hidden rounded border-2 bg-white py-5 px-6 transition duration-200 ease-linear hover:cursor-pointer hover:shadow-lg sm:h-96 sm:w-72"
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
            <div className="text-2xl font-bold">
              {!title ? "Lorem ipsum" : { title }}
            </div>
            <div className="text-sm font-medium text-gray-500">
              {!desc
                ? "Lorem ipsum dolor sit amet, consectetuer adipiscing elit..."
                : { description }}
            </div>
          </div>

          <div className="flex flex-row items-end justify-between">
            <div className="flex flex-col transition ease-in-out group-hover:-translate-x-1">
              <div className="flex flex-row items-center gap-2">
                <Token />
                <div className="font-mont text-2xl font-bold text-purple-600">
                  {!price ? "99000" : { price }}
                </div>
              </div>
              <div className="text-xs text-gray-500">90000 XLM base</div>
              <div className="text-xs text-gray-500">
                +10% royalty (90000 XLM)
              </div>
            </div>

            <div className="transition ease-in-out group-hover:translate-x-1">
              <Button text={"Buy"} color={"#9333ea"} />
            </div>
          </div>
        </div>
      </div>
    </a>
  );
};
