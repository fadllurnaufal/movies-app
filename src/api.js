import axios from "axios";

const apiKey = process.env.REACT_APP_APIKEY
const  baseUrl = process.env.REACT_APP_BASEURL

export const getMoviesList = async () => {
    const movies = await axios.get(`${baseUrl}/movie/popular?api_key=${apiKey}`)
    console.log({movieList : movies})
    return movies.data.results
    
} 

export const getMoviesTop = async () => {
    const topRated = await axios.get(`${baseUrl}/movie/top_rated?api_key=${apiKey}`)
    console.log({movieTop : topRated})
    return topRated.data.results
    
} 

export const getMoviesPlaying = async () => {
    const playingNow = await axios.get(`${baseUrl}/movie/now_playing?api_key=${apiKey}`)
    console.log({moviePlaying : playingNow})
    return playingNow.data.results
}

export const searchMovies = async (e) => {
    const search = await axios.get(`${baseUrl}/search/movie?query=${e}&api_key=${apiKey}`)
    console.log(e);
    return search.data
} 