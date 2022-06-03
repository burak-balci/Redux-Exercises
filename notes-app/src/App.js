import "./App.css";
import Header from "./components/Header";
import TextArea from "./components/TextArea";
import NoteCard from "./components/NoteCard";
import { useSelector } from "react-redux";

function App() {
  const notes = useSelector((state) => state.notes.items);
  const search = useSelector((state) => state.notes.filtered);

  const filteredNote = search
    ? notes.filter(
        (item) =>
          item.title.toLowerCase().includes(search.toLowerCase()) ||
          item.note.toLowerCase().includes(search.toLowerCase())
      )
    : notes;

  return (
    <div>
      <div className="flex flex-col items-center">
        <Header />
        <TextArea />
      </div>
      <div className="flex flex-wrap space-between justify-center flex-auto mt-3">
        {filteredNote.map((notes) => (
          <NoteCard key={notes.id} notes={notes} />
        ))}
      </div>
    </div>
  );
}

export default App;
