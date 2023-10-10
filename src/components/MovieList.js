import React from 'react';
import FilmCard from './FilmCard';


const MovieList = ({ films,title,rate }) => {
    return (

        <div className="movie-list">
        {films.filter((el)=> el.titre.toUpperCase().includes(title.toUpperCase().trim()) && el.note>=rate)
        .map((film, index) => (
          <FilmCard key={index} film={film} />
        ))}


      </div>
    );
  };

  export default MovieList;
