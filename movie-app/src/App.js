import Header from "./components/Header";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Popular from "./pages/Popular";
import TopRated from "./pages/TopRated";
import NowPlaying from "./pages/NowPlaying";
import UpComing from "./pages/UpComing";
import MovieDetail from "./pages/MovieDetail";

function App() {
  return (
    <div className="bg-gray-700">
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="popular" element={<Popular />} />
        <Route path="top_rated" element={<TopRated />} />
        <Route path="now_playing" element={<NowPlaying />} />
        <Route path="up_coming" element={<UpComing />} />
        <Route path="/movie/:id" element={<MovieDetail />} />
      </Routes>
    </div>
  );
}

export default App;
