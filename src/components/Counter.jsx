"use client";
import React, { useState } from "react";

const Counter = () => {
  const [count, setCount] = useState(0);
  //   console.log("I am from counter component");

  const increment = () => setCount(count + 1);
  const decrement = () => setCount(count - 1);

  return (
    <div className="max-w-sm mt-8 mx-auto bg-slate-400 shadow-lg rounded-lg overflow-hidden">
      <div className="text-center p-6">
        <p className="text-2xl mb-4">Count: {count}</p>
        <button
          onClick={increment}
          className="bg-blue-500 text-black px-4 py-2 rounded mr-2"
        >
          +
        </button>
        <button
          onClick={decrement}
          className="bg-red-500 text-black px-4 py-2 rounded"
        >
          -
        </button>
      </div>
    </div>
  );
};

export default Counter;
