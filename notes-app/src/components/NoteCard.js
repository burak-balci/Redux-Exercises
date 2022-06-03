import { deleteNote } from "../redux/notesSlice";
import { useDispatch } from "react-redux";

function NoteCard({ notes }) {
  const dispatch = useDispatch();

  const handleRemove = (id) => {
    if (window.confirm("Are you sure?")) {
      dispatch(deleteNote(id));
    }
  };

  return (
    <div
      className={`flex w-1/5 flex-col m-5 p-2 pt-0 shadow-lg  ${notes.color}   divide-gray-100 rounded-lg divide-y-2`}
    >
      <div className="flex justify-end p-1">
        <div className="flex text-center mr-auto ml-auto text-lg break-all whitespace-pre-line">
          {notes.title}
        </div>
        <button
          onClick={() => handleRemove(notes.id)}
          className="flex text-lg mt-0 text-gray-100 font-bold"
        >
          X
        </button>
      </div>
      <p className="flex text-center p-2 pb-10 justify-center overflow-hidden whitespace-pre-line break-all">
        {notes.note}
      </p>
    </div>
  );
}

export default NoteCard;
