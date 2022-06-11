import { useDispatch } from "react-redux";
import { deleteContact } from "../../redux/contactSlice";

import { Link } from "react-router-dom";

function Item({ item }) {
  const dispatch = useDispatch();

  const handleDelete = (id) => {
    if (window.confirm("Are you sure?")) {
      dispatch(deleteContact(id));
    }
  };

  return (
    <div className="font">
      <div className="flex justify-center items-center p-2 m-2 rounded-md font-bold  border-2 border-emerald-500">
        <div className="text-violet-500 ">Name: {item.name}</div>
        <div className="text-violet-500 m-auto ">Number: {item.number}</div>
        <div>
          <Link
            className="hover:underline font-bold text-violet-500"
            to={`edit/${item.id}`}
          >
            Edit
          </Link>
          <button
            className="mx-2 text-red-500 hover:underline p-1 rounded-sm"
            onClick={() => handleDelete(item.id)}
          >
            X
          </button>
        </div>
      </div>
    </div>
  );
}

export default Item;
