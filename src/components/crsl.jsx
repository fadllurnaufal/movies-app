import CarouselDescription from "./CarouselDescription";
import { getMoviesList } from "../api";
import { useEffect, useState } from "react";

const Carousel = () => {
  const [popularMovies, setPopularMovies] = useState([]);
  useEffect(() => {
    getMoviesList().then((result) => {
      setPopularMovies(result);
    });
  }, []);

  const MovieList = () => {
    return popularMovies.map((movie, i) => {
      return (
        <div key={i}>
           <img
              src={`${process.env.REACT_APP_BASEIMGURL}/${movie.backdrop_path}`}
              className="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
              alt="..."
            />
        </div>
      );
    });
  };
  return (
    <>
      <div
        id="default-carousel"
        className="w-full h-[550px]"
        data-carousel="slide"
      >
        <div className="overflow-hidden rounded-lg ">
          <div className="hidden duration-700 ease-in-out" data-carousel-item>
            <MovieList />
          </div>
        </div>
        <div className="absolute z-30 flex space-x-3 -translate-x-1/2 bottom-5 left-1/2">
          <button
            type="button"
            className="w-3 h-3 rounded-full"
            aria-current="true"
            aria-label="Slide 1"
            data-carousel-slide-to="0"
          ></button>
        </div>
        <CarouselDescription />
      </div>
      <button
        type="button"
        className="absolute mt-16 top-0 left-0 z-30 flex items-center justify-center h-[550px] cursor-pointer group focus:outline-none"
        data-carousel-prev
      >
        <span className="inline-flex items-center justify-center h-full w-10 hover:bg-[#0A0A0B]/30 duration-500 text-[#0A0A0B] hover:text-white">
          <svg
            className="w-4 h-4 text-[#fff]/50"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 6 10"
          >
            <path
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M5 1 1 5l4 4"
            />
          </svg>
          <span className="sr-only">Previous</span>
        </span>
      </button>
      <button
        type="button"
        className="absolute mt-16 top-0 right-0 z-30 flex items-center justify-center h-[550px] cursor-pointer group focus:outline-none"
        data-carousel-prev
      >
        <span className="inline-flex items-center justify-center h-full w-10 hover:bg-[#0A0A0B]/30 duration-500 text-[#0A0A0B] hover:text-white">
          <svg
            className="w-4 h-4 text-[#fff]/50"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 6 10"
          >
            <path
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="m1 9 4-4-4-4"
            />
          </svg>
          <span className="sr-only">Next</span>
        </span>
      </button>
    </>
  );
};

export default Carousel;
