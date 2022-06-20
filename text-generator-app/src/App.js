import "./App.css";
import Input from "./components/Input";
import TextArea from "./components/TextArea";

function App() {
  return (
    <div className="flex w-3/4 justify-center flex-col mx-auto">
      <div className="flex justify-center text-5xl border-b-2 text-white border-white p-8 font-sans">
        React Sample Text Generator App
      </div>
      <Input />
      <TextArea />
    </div>
  );
}

export default App;
