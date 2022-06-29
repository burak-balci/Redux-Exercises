import { useEffect, useState } from "react";
import { fetchUpComingMovies } from "../../redux/services";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import Loading from "../../components/Loading";
import { Helmet } from "react-helmet";

function UpComing() {
  const { movies } = useSelector((state) => state.movies);
  const [page, setPage] = useState(1);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchUpComingMovies(page));
  }, [page]);

  return (
    <div>
      <Helmet>
        <title>Upcoming Movies</title>
        <meta name="description" content="Upcoming movies description" />
      </Helmet>
      <div className="flex font-bold items-center text-2xl justify-center mt-5 text-yellow-400 bg-gray-700">
        Up Coming Movies
      </div>
      <div className="flex flex-wrap rounded-lg mt-5 w-3/4 mx-auto justify-center">
        {movies.length < 19 ? (
          <Loading />
        ) : (
          movies.results.map((movie, index) => (
            <Link to={`/movie/${movie.id}`}>
              <div key={index} className="flex m-2">
                <div className="flex flex-col pb-0">
                  <div className="flex sticky justify-center w-12 p-1 flex-row ml-2 -mb-14 rounded-sm bg-yellow-500 text-white font-bold">
                    {movie.vote_average}
                  </div>
                  <img
                    className="m-4 rounded-lg mr-0 ml-0 h-96 w-66 hover:border-orange-500 border-4 border-transparent"
                    src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
                    alt={movie.title}
                  />
                </div>
              </div>
            </Link>
          ))
        )}
      </div>
      <div className="flex my-5 pb-5 items-center text-xl justify-center font-bold text-yellow-500">
        <button
          onClick={() => dispatch(fetchUpComingMovies(setPage(page - 1)))}
          disabled={page === 1}
          className="mr-5 border-2 border-transparent rounded-sm hover:text-gray-700 hover:bg-yellow-500"
        >
          Previous Page
        </button>
        {page}
        <button
          onClick={() => dispatch(fetchUpComingMovies(setPage(page + 1)))}
          className="ml-5 border-2 border-transparent rounded-sm hover:text-gray-700 hover:bg-yellow-500"
        >
          Next Page
        </button>
      </div>
    </div>
  );
}

export default UpComing;
