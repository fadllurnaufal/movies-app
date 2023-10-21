import "./App.css";
import CarouselWithContent from "./components/Carousel";
import MovieList from "./pages/MovieList";
import TopMovies from "./pages/TopMovies";
import {
  getMoviesList,
  getMoviesTop,
  getMoviesPlaying,
  searchMovies,
} from "./api";
import { useEffect, useState } from "react";
import NowPlaying from "./pages/NowPlaying";

const App = () => {
  const [popularMovies, setPopularMovies] = useState([]);
  useEffect(() => {
    getMoviesList().then((result) => {
      setPopularMovies(result);
    });
  }, []);

  const [topMovies, setTopMovies] = useState([]);
  useEffect(() => {
    getMoviesTop().then((res) => {
      setTopMovies(res);
    });
  }, []);

  const [nowPlaying, setNowPlaying] = useState([]);
  useEffect(() => {
    getMoviesPlaying().then((res) => {
      setNowPlaying(res);
    });
  }, []);

  const handleSearch = async (e) => {
    if (e.length > 1) {
      const query = await searchMovies(e);
      setPopularMovies(query.results);
    }
  };

  return (
    <div className="App overflow-y-scroll">
      <header className="App-header w-screen pb-10">
        <div className="w-full">
          <nav className="navbar navbar-expand-lg fixed-top items-center w-full top-0 py-4 px-10 flex sm:justify-between space-x-4 bg-[#0A0A0B] bg-opacity-70 fixed z-20">
            <div className="flex items-center left-0 gap-x-10">
              <span className="text-white text-2xl font-bold">
                Movie Project
              </span>
              <div>
                {[
                  ["Home", "/home"],
                  ["New & Popular", "/popular"],
                  ["Top Rated", "/toprated"],
                ].map(([title, url]) => (
                  <a
                    href={url}
                    className="rounded-lg px-3 py-2 text-white font-light mx-2 hover:text-gray-400 duration-300 cursor-pointer"
                  >
                    {title}
                  </a>
                ))}
              </div>
            </div>

            <div className="items-center left-0 flex gap-2">
              <div className="relative">
                <input
                  type="text"
                  placeholder="Search..."
                  onChange={({ target }) => handleSearch(target.value)}
                  className="rounded-lg pl-10 pr-4 py-2 text-gray-800 bg-gray-200 border-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-100 focus:ring-gray-400 focus:outline-none w-48 sm:w-auto"
                />
                <span className="absolute inset-y-0 left-0 pl-3 flex items-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-5 h-5 text-gray-400"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
                    />
                  </svg>
                </span>
              </div>
            </div>
          </nav>
        </div>
        <CarouselWithContent />
        <div className="w-full ml-20 mr-20 mt-4">
          <div className="text-[#f5f5f5] mt-3 tracking-wider font-semibold text-lg">
            New Realeases & Search Results
          </div>
          <MovieList movies={popularMovies} />{" "}
          {/* Gunakan komponen MovieList */}
        </div>
        <div className="w-full ml-20 mr-20 mt-4">
          <div className="text-[#f5f5f5] mt-3 tracking-wider font-semibold text-lg">
            Top Rated
          </div>
          <TopMovies movies={topMovies} /> {/* Gunakan komponen TopMovies */}
        </div>
        <div className="w-full ml-20 mr-20 mt-4">
          <div className="text-[#f5f5f5] mt-3 tracking-wider font-semibold text-lg">
            Now Playing
          </div>
          <NowPlaying movies={nowPlaying} /> {/* Gunakan komponen TopMovies */}
        </div>
      </header>
    </div>
  );
};

export default App;
