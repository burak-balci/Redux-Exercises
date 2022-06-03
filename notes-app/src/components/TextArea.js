import { useState } from "react";
import { useDispatch } from "react-redux";
import { addNewNote } from "../redux/notesSlice";

function TextArea() {
  const [notes, setNotes] = useState({ title: "", note: "", color: "" });
  const dispatch = useDispatch();

  const handleClick = (color) => {
    setNotes((prevState) => ({ ...prevState, color: color }));
  };

  const handleSubmit = (e) => {
    if (notes.title === "" || notes.note === "") {
      return;
    }
    e.preventDefault();
    dispatch(addNewNote(notes));
    setNotes({ title: "", note: "", color: "" });
  };
  return (
    <div className="flex flex-col w-2/4 mt-3">
      <div className="flex bg-neutral-200 flex-wrap rounded-t-lg p-1 justify-center">
        <div className="flex items-center space-x-3 rounded-b-lg p-1 ml-5">
          <h2 className="text-neutral-500 font-bold">Title:</h2>
          <input
            value={notes.title}
            placeholder="Enter title here..."
            onChange={(e) =>
              setNotes((prevState) => ({ ...prevState, title: e.target.value }))
            }
            className="rounded-lg outline-0 p-1"
          />
        </div>
      </div>
      <textarea
        value={notes.note}
        onChange={(e) =>
          setNotes((prevState) => ({ ...prevState, note: e.target.value }))
        }
        placeholder="Enter your note here..."
        className=" bg-gray-100 p-5 w-full h-36 mb-0 resize-none outline-0 text-gray-700"
      ></textarea>
      <div className="flex bg-neutral-200 justify-between flex-wrap rounded-b-lg">
        <div className="flex space-x-3 rounded-b-lg p-1 ml-5">
          <button
            onClick={() => handleClick("bg-orange-400")}
            className="rounded-full bg-orange-400 p-4"
          ></button>
          <button
            onClick={() => handleClick("bg-red-600")}
            className="rounded-full bg-red-600 p-4"
          ></button>
          <button
            onClick={() => handleClick("bg-cyan-500")}
            className="rounded-full  bg-cyan-500 p-4"
          ></button>
          <button
            onClick={() => handleClick("bg-emerald-400")}
            className="rounded-full  bg-emerald-400 p-4"
          ></button>
          <button
            onClick={() => handleClick("bg-violet-700")}
            className="rounded-full  bg-violet-700 p-4"
          ></button>
        </div>
        <div className="flex ">
          <button
            onClick={handleSubmit}
            className="rounded-md bg-orange-400 mr-5 m-1 p-1 w-20 "
          >
            Add
          </button>
        </div>
      </div>
    </div>
  );
}

export default TextArea;
