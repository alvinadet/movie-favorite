import React, { Component } from 'react';
import Axios from 'axios';
import MovieListItems from './MovieListItems';
import './Movie.css';

export default class Movie extends Component {
  state = {
    movies: []
  };

  getMovies = () => {
    Axios.get(
      'https://api.themoviedb.org/3/discover/movie?api_key=4b79163ef3bf5048e4b25dbf42578ca3&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1'
    )
      .then(res => {
        const movies = res.data.results.map(result => {
          const {
            vote_count,
            id,
            genre_ids,
            poster_path,
            title,
            vote_average,
            release_date
          } = result;
          return {
            vote_count,
            id,
            genre_ids,
            poster_path,
            title,
            vote_average,
            release_date
          };
        });
        this.setState({
          movies
        });
      })
      .catch(err => {
        console.log(err);
      });
  };

  componentDidMount() {
    this.getMovies();
  }

  render() {
    const { movies } = this.state;
    return (
      <section>
        <ul className="movies">
          {movies.map(movie => {
            return <MovieListItems key={movie.id} movie={movie} />;
          })}
        </ul>
      </section>
    );
  }
}
