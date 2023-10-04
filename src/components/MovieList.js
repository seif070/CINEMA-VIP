import React from 'react';
import FilmCard from './FilmCard';


const MovieList = ({ films }) => {
    return (

        <div className="movie-list">
        {films.map((film, index) => (
          <FilmCard key={index} film={film} />
        ))}
      </div>
    );
  };

  export default MovieList;
