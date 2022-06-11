import { useState } from "react";

import { useDispatch } from "react-redux";
import { addContact } from "../../redux/contactSlice";
import { nanoid } from "@reduxjs/toolkit";

function Form() {
  const [name, setName] = useState("");
  const [number, setNumber] = useState("");
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!name || !number) return false;

    dispatch(addContact({ id: nanoid(), name, number: number }));
    setName("");
    setNumber("");
  };
  return (
    <div className="flex  justify-center bg-emerald-300 rounded-b-sm">
      <form onSubmit={handleSubmit}>
        <input
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="name"
          className="rounded-md p-1 m-2 outline-none border-2 border-emerald-500"
        />
        <input
          placeholder="phone number"
          value={number}
          onChange={(e) => setNumber(e.target.value)}
          className="rounded-md p-1 m-2 outline-none border-2 border-emerald-500"
        />
        <button
          className="rounded-sm bg-emerald-500 px-5 py-1 border-2 border-emerald-600"
          type="submit"
        >
          Add
        </button>
      </form>
    </div>
  );
}

export default Form;
