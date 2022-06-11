import { contactSelectors, deleteAllContact } from "../../redux/contactSlice";
import { useSelector, useDispatch } from "react-redux";

import Item from "./Item";

function List() {
  const contacts = useSelector(contactSelectors.selectAll);
  const total = useSelector(contactSelectors.selectTotal);

  const dispatch = useDispatch();

  const handleDeleteAll = () => {
    if (window.confirm("Are you sure?")) {
      dispatch(deleteAllContact());
    }
  };

  return (
    <div className="rounded-t-sm justify-center flex flex-col bg-emerald-300 ">
      <div className="flex fonth justify-center my-2 fontxl text-violet-500">
        Contacts({total})
      </div>
      {total > 0 && (
        <button
          className="flex m-auto rounded-md p-1 justify-center bg-rose-500 w-1/3 font"
          onClick={handleDeleteAll}
        >
          Delete All
        </button>
      )}
      {contacts.map((contact) => (
        <Item item={contact} key={contact.id} />
      ))}
    </div>
  );
}

export default List;
