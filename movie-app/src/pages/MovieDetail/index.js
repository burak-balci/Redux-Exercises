import { useParams } from "react-router-dom";
import { useEffect } from "react";
import { fetchMovieDetails } from "../../redux/services";
import { useDispatch, useSelector } from "react-redux";
import { Helmet } from "react-helmet";

function MovieDetail() {
  const { id } = useParams();
  const dispatch = useDispatch();
  const { movieDetail } = useSelector((state) => state.movies);

  useEffect(() => {
    dispatch(fetchMovieDetails(id));
  }, [id]);

  return (
    <div className="flex flex-row justify-start my-0 border-5 leading-loose font-sans">
      <Helmet>
        <title>{movieDetail.title}</title>
        <meta name="description" content="Movie description" />
      </Helmet>
      <img
        className="m-10 w-1/4 rounded-lg"
        src={`https://image.tmdb.org/t/p/w500/${movieDetail.poster_path}`}
        alt={movieDetail.title}
      />
      <div className="flex flex-col gap-y-2 font-bold text-lg w-2/3 mt-16 text-yellow-500">
        <div className="flex flex-row">Movie : {movieDetail.title}</div>
        {movieDetail.homepage && (
          <a
            target="_blank"
            className="hover:text-green-400"
            href={`${movieDetail.homepage}`}
          >
            Website : {movieDetail.homepage}
          </a>
        )}
        <div>Overview : {movieDetail.overview}</div>
        <div>Release Date : {movieDetail.release_date}</div>
        <div>
          {movieDetail.production_companies && "Productions :"}
          <ul>
            {movieDetail.production_companies &&
              movieDetail.production_companies.map((production) => (
                <li className="list-disc list-inside" key={production.id}>
                  {production.name}
                </li>
              ))}
          </ul>
          Genres:
          <ul>
            {movieDetail.genres &&
              movieDetail.genres.map((genre) => (
                <li className="list-disc list-inside" key={genre.id}>
                  {genre.name}
                </li>
              ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default MovieDetail;
