import React, { useRef } from "react";

export const Button = ({ text, color, link, handler }) => {
  const button = useRef(null);

  return (
    <>
      <button
        ref={button}
        style={{ backgroundColor: `${color}` }}
        onClick={handler}
        className="select-none rounded px-4 py-2 font-montserrat text-lg font-bold text-white transition duration-100 ease-in hover:scale-95"
      >
        {text}
      </button>
    </>
  );
};
