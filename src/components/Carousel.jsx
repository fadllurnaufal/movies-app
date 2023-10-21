import { Carousel, Typography, Button } from "@material-tailwind/react";
import { useEffect, useState } from "react";
import { getMoviesList } from "../api";

const formatDate = (release_date) => {
  const options = { year: "numeric", month: "short", day: "numeric" };
  const date = new Date(release_date);
  return date.toLocaleDateString("en-US", options);
};

const CarouselWithContent = () => {
  const [popularMovies, setPopularMovies] = useState([]);

  useEffect(() => {
    getMoviesList().then((result) => {
      setPopularMovies(result);
    });
  }, []);

  return (
    <Carousel className="w-full">
      {popularMovies.map((movie, i) => (
        <div key={i}>
          <div className="relative mt-20">
            <div className="bg-black opacity-70 h-[540px] w-full absolute"></div>
            <img
              className="h-[540px] w-full"
              src={`${process.env.REACT_APP_BASEIMGURL}/${movie.backdrop_path}`}
              alt={movie.title}
            />
            <div className="flex">
                <img
                  className="rounded-md h-[540px] w-[320px] absolute top-0 py-12 left-20"
                  src={`${process.env.REACT_APP_BASEIMGURL}/${movie.poster_path}`}
                  alt={`${movie.title} Poster`}
                />
              <div>
                <div className="absolute bottom-[20px] left-[420px] w-full text-white">
                  <div className="text-5xl font-sans font-bold tracking-wide mb-6 w-1/2">
                    {movie.title}
                  </div>
                  <div className="text-xl font-semibold font-sans tracking-wide inline-flex w-1/2 mb-6">
                    <div className="mr-10">
                      {formatDate(movie.release_date)}
                    </div>
                    <div className="inline-flex items-center gap-x-2">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                        className="w-6 h-6"
                      >
                        <path
                          fillRule="evenodd"
                          d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
                          clipRule="evenodd"
                        />
                      </svg>
                      {movie.vote_average}
                    </div>
                  </div>
                  <div className="text-sm font-sans tracking-wide w-1/3 mb-6 italic description text-[#f5f5f5]">
                    {movie.overview}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}
    </Carousel>
  )
}

export default CarouselWithContent
