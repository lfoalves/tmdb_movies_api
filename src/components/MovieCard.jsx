import { Link } from "react-router-dom";
import { FaStar } from 'react-icons/fa';

import '../styles/movie-card.css';

const imageURL = import.meta.env.VITE_IMG;

export function MovieCard({ movie, showLink = true }) {
  return(
    <div
      className="movie-card"
      title={movie.title}
    >
      <img 
        src={imageURL + movie.poster_path} 
        alt={movie.title}
        style={{
          width: '100%',
          marginBottom: '1rem'
        }}
      />
      <h2 style={{marginBottom: '1rem'}}>{movie.title}</h2>
      <p style={{marginBottom: '1rem'}}>
        <FaStar style={{color: '#f7d354'}} /> {movie.vote_average}
      </p>
      {
        showLink &&
        <Link 
          to={'/movie/'+ movie.id}
          title='Clique para ver os detalhes'
        >
          Detalhes
        </Link>
      }
    </div>

  );
}