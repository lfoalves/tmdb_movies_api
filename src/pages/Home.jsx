import { useEffect, useState } from "react";
import { Loading } from "../components/Loading";
import { MovieCard } from "../components/MovieCard";

const moviesURl = import.meta.env.VITE_API;
const apiKey = import.meta.env.VITE_API_KEY;

export function Home() {
  const [topMovies, setTopMovies] = useState([]);

  function getTopMovies(url) {
    fetch(url)
    .then(response => response.json())
    .then(data => setTopMovies(data.results))
    .catch(err => console.error(err));
  }

  useEffect(() => {
    const topRateURL = moviesURl + 'top_rated?'+ apiKey
    getTopMovies(topRateURL);    
  }, [])

  return(
    <div 
      id="container"
    >
      <h2 className="title">Melhores filmes:</h2>
      <div
        className="movies-container"
      >
        {topMovies.length === 0 && <Loading />}
        {topMovies.length > 0 &&
           topMovies.map((movie) => <MovieCard key={movie.id} movie={movie} />)}
      </div>  
    </div>    
  );
}