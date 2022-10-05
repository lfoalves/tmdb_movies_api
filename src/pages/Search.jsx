import { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { Loading } from '../components/Loading';

import { MovieCard } from '../components/MovieCard';

import '../styles/movie-card.css';

const searchURL = import.meta.env.VITE_SEARCH;
const apiKey = import.meta.env.VITE_API_KEY;

export function Search() {
  const [searchParams] = useSearchParams();
  const [movies, setMovies] = useState([]);
  const query = searchParams.get("q");

  function getSearchMovies(url) {
    fetch(url)
    .then(response => response.json())
    .then(data =>   setMovies(data.results))
    .catch((err) => console.error(err))
  };

  useEffect(() => {
    const searchWithQueryURL = `${searchURL}?${apiKey}&query=${query}`;
    getSearchMovies(searchWithQueryURL);
  }, [query]);

  return(
    <div id="container">
      <h2 className='title'>Resultado para: <span className='query-text'>{query}</span></h2>
      <div 
        className="movies-container"
      >
        {movies.length <= 0 && <Loading />}
        {
          movies.length > 0 &&
          movies.map((movie) => <MovieCard key={movie.id} movie={movie} />)
        }
      </div>
    </div>
  );
}