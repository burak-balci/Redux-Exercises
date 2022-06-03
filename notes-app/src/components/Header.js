import { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { filterNote } from "../redux/notesSlice";

function Header() {
  const [title, setTitle] = useState("");
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(filterNote(title));
  }, [title]);

  return (
    <div className="flex flex-col justify-center items-center mt-6">
      <div className="flex flex-col items-center font-bold text-2xl text-slate-400">
        NotesApp
      </div>
      <input
        className="flex rounded-lg p-2 m-2 outline-0"
        placeholder="Search notes..."
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
    </div>
  );
}

export default Header;
