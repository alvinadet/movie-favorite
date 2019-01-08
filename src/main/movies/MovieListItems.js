import React from 'react';
const MovieListItems = ({ movie }) => {
  const { title, poster_path } = movie;
  const imgUrl = `https://image.tmdb.org/t/p/w342/${poster_path}`;
  return (
    <li className="movieItems">
      <img src={imgUrl} alt="" />
      <p>{title}</p>
    </li>
  );
};
export default MovieListItems;
