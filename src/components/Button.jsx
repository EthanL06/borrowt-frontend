import React, { useRef, useEffect } from "react";

export const Button = ({ text, color, link, handler }) => {
  const button = useRef(null);

  return (
    <>
      <button
        ref={button}
        style={{ backgroundColor: `${color}` }}
        onClick={handler}
        className="select-none rounded px-4 py-2 font-montserrat text-lg font-bold text-white hover:outline hover:outline-2 hover:outline-purple-600"
      >
        {text}
      </button>
    </>
  );
};
