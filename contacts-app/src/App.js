import "./App.css";
import Contacts from "./components/Contacts";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import Edit from "./components/Contacts/Edit";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Contacts />} />
          <Route path="/edit/:id" element={<Edit />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
