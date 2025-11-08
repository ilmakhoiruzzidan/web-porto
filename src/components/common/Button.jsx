import React from "react";

export default function Button({ children, onClick, className = "" }) {
  const baseStyle =
    "bg-[#3A5A40] text-[#DAD7CD] px-6 py-3 my-2 flex items-center rounded-full transition-all duration-300 hover:bg-[#4C7351] hover:scale-105 hover:shadow-md";

  return (
    <button onClick={onClick} className={`${baseStyle} ${className}`}>
      {children}
    </button>
  );
}
