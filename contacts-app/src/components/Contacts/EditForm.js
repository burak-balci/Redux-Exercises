import { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router";
import { updateContact } from "../../redux/contactSlice";

function EditForm({ contact }) {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [name, setName] = useState(contact.name);
  const [number, setNumber] = useState(contact.number);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name || !number) return false;
    dispatch(
      updateContact({
        id: contact.id,
        changes: {
          name,
          number,
        },
      })
    );
    navigate("/", { replace: true });
  };
  console.log(contact);

  return (
    <div className="font text-violet-500">
      <form onSubmit={handleSubmit}>
        Name :
        <input
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="name"
          className="rounded-md p-1 text-black m-2 outline-none border-2 border-emerald-500"
        />
        Number:
        <input
          value={number}
          placeholder="phone number"
          onChange={(e) => setNumber(e.target.value)}
          className="rounded-md text-black p-1 m-2 outline-none border-2 border-emerald-500"
        />
        <button
          type="submit"
          className="text-black rounded-sm ml-2 bg-emerald-500 px-5 py-1 border-2 border-emerald-600"
        >
          Update
        </button>
      </form>
    </div>
  );
}

export default EditForm;
