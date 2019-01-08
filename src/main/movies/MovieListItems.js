import React from 'react';
import './MovieListItems.css';

const MovieListItems = ({ movie }) => {
  const { title, poster_path, year, vote_average } = movie;
  const imgUrl = `https://image.tmdb.org/t/p/w342/${poster_path}`;
  return (
    <li className="movie-item">
      <img src={imgUrl} alt={title} />
      <div className="movie-description">
        <h2>{title}</h2>
        <section className="movie-details">
          <div className="movie-year">
            <span className="title">Year</span>
            <span>{year}</span>
          </div>
          <div className="movie-rating">
            <span className="title">Rating</span>
            <span>{vote_average}</span>
          </div>
        </section>
      </div>
    </li>
  );
};
export default MovieListItems;
