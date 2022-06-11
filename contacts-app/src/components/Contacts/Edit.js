import { useParams, Navigate } from "react-router";
import EditForm from "./EditForm";

import { useSelector } from "react-redux";
import { contactSelectors } from "../../redux/contactSlice";

function Edit() {
  const { id } = useParams();

  const contact = useSelector((state) =>
    contactSelectors.selectById(state, id)
  );

  if (!contact) {
    return <Navigate to="/" />;
  }

  return (
    <div className="flex flex-col items-center mx-auto rounded-sm bg-emerald-400 flex-wrap p-10 w-2/4 my-10">
      <div className="flex fonth justify-center my-2 fontxl text-violet-500">
        Edit
      </div>
      <EditForm contact={contact} />
    </div>
  );
}

export default Edit;
