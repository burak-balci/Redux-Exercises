import { Link } from "react-router-dom";

function Header() {
  return (
    <div className="bg-gray-800 top-0 sticky z-10">
      <div className="flex p-3 w-3/4 mx-auto text-yellow-400 ml-56">
        <div className="flex items-center">
          <div className="font-bold text-4xl items-center mr-10">
            <Link to="/">BBDB</Link>
          </div>
          <div className="flex space-x-5">
            <Link to="popular">Popular</Link>
            <Link to="top_rated">Top Rated</Link>
            <Link to="now_playing">Now Playing</Link>
            <Link to="up_coming">Up Coming</Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
