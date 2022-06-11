import List from "./List";
import Form from "./Form";

function index() {
  return (
    <div className="flex flex-col rounded-sm bg-emerald-400 flex-wrap p-10 w-2/4 my-10 mx-auto">
      <List />
      <Form />
    </div>
  );
}

export default index;
