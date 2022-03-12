import React from "react";

export const Button = ({ text, color }) => {
  return (
    <button
      style={{ backgroundColor: `${color}` }}
      className="rounded px-4 py-2 font-montserrat text-lg font-bold text-white"
    >
      {text}
    </button>
  );
};
