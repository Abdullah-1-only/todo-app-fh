"use client";
import React, { useState } from "react";

const Todoapp = () => {
  const [goku, setGoku] = useState("");
  const [tata, setTata] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
  };
  const handleChange = (e) => {
    setGoku(e.target.value);
  };

  const handleClick = () => {
    // if (!goku > 0) {
    //   alert ("plesae fill input box")
    //   return;
    // }
    setTata([...tata, goku]);
    setGoku("");
  };

  const handleDelete=(DeleteIndex)=>{
    setTata((newTata) => newTata.filter((_, index) => index !== DeleteIndex))
  }

  return (
    <>
      <h1 className="text-9xl font-bold text-red-600 bg-red-200 uppercase text-center py-7 ">
        todo app
      </h1>
      <form onSubmit={handleSubmit} className="flex gap-3 justify-center p-4">
        <input
          onChange={handleChange}
          value={goku}
          type="text"
          className="rounded-xl border-2 border-black bg-rose-200  py-2 px-6 "
        />
        <button
          onClick={handleClick}
          className=" border-2 border-black text-xl p-3 bg-blue-400 rounded-xl"
        >
          Add
        </button>
      </form>
      <hr />
      <div>
        {tata.length == 0 ? (
          <div className="p-10 bg-gray-300 text-center">
            Nothing to see here!
          </div>
        ) : (
          <div className="flex flex-col gap-5 p-5 bg-green-200 w-full">
            {tata.map((todo, number) => (
              <div key={number} className="flex justify-between w-full">
                <h1 className="flex justify-between gap-5 text-3xl p-4">
                {todo}
              </h1>
                <button onClick={()=>handleDelete(number)} className=" border-2 border-black text-xl p-3 bg-red-400 rounded-xl">
                  Delete
                </button>
              </div>
            ))}
          </div>
        )}
      </div>
    </>
  );
};

export default Todoapp;
