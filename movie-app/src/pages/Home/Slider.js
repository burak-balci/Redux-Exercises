import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper";
import { useDispatch, useSelector } from "react-redux";
import { fetchMoviesSlider } from "../../redux/services";
import { useEffect } from "react";
import { Link } from "react-router-dom";

function Slider() {
  const { sliderMovies } = useSelector((state) => state.movies);
  const dispatch = useDispatch();

  useEffect(() => {
    compare();
  }, []);

  function compare() {
    dispatch(fetchMoviesSlider());
  }

  return (
    <div>
      <div className="p-10 w-3/4 mx-auto pb-3 pt-2">
        <div className="flex font-bold items-center text-2xl justify-center my-5 text-yellow-400 bg-gray-700">
          Recommended Movies
        </div>
        <Swiper
          spaceBetween={10}
          pagination={{
            dynamicBullets: true,
          }}
          modules={[Pagination]}
          className="mySwiper"
          slidesPerView={4}
        >
          {sliderMovies.results &&
            sliderMovies.results.map((movie, index) => (
              <div key={index}>
                <SwiperSlide key={index}>
                  <Link to={`/movie/${movie.id}`}>
                    <img
                      className="rounded-lg h-96 border-4 border-transparent hover:border-orange-500"
                      src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
                      alt={movie.title}
                    />
                    <div className="text-center font-bold text-md font-sans text-lg text-yellow-400">
                      {movie.title}
                    </div>
                  </Link>
                </SwiperSlide>
              </div>
            ))}
        </Swiper>
      </div>
    </div>
  );
}

export default Slider;
