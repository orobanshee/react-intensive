import { useState } from "react";

export function Counter() {
  const [count, setCount] = useState(0);

  function handleClick() {
    setCount(count + 1);
  }

  return (
    <div className="">
      <div
        className="flex flex-col 
    justify-center 
    items-center 
    p-6
     bg-gray-500
     rounded-3xl
     shadow-md
     hover:bg-cyan-500 transform hover:scale-105 transition duration-200
     "
      >
        <button
          onClick={handleClick}
          className="
      font-bold
      px-6
      py-3
      bg-blue-400
      rounded-3xl
      hover:bg-blue-200
      shadow-md
      transition-colors duration-500"
        >
          Tap me
        </button>
        <p
          className="
      text-3xl
      font-bold
      text-emerald-100
      mt-4
      "
        >
          {count}
        </p>
      </div>
    </div>
  );
}
