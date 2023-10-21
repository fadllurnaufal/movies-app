import React from "react";
import { Link } from 'react-router-dom';


const formatDate = (release_date) => {
  const options = { year: "numeric", month: "short", day: "numeric" };
  const date = new Date(release_date);
  return date.toLocaleDateString("en-US", options);
};

const MovieList = ({ movies }) => {
  return (
    <a href={`${movies.id}`}>
      <div className="grid grid-flow-col auto-cols-auto gap-2 overflow-x-scroll mr-20">
        {movies.map((movie, i) => (
          <div key={i} className="relative group mt-4">
            <div className="w-[220px] h-[125px] relative overflow-hidden hover:rounded-md rounded-md">
              <img
                className="rounded-md w-[220px] h-[120px] transition-transform transform scale-100 group-hover:scale-110 duration-300"
                src={`${process.env.REACT_APP_BASEIMGURL}/${movie.backdrop_path || movie.poster_path}`}
                alt={movie.title}
              />
              <div className="absolute rounded-md w-full h-full inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-black bg-opacity-70">
                <div className="flex flex-col">
                  <p className="text-white text-center font-semibold">{movie.title}</p>
                  <p className="text-[#d5d5d5] text-center text-xs">
                    {formatDate(movie.release_date)}
                  </p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </a>
  );
};

export default MovieList;
