import React, { Component } from 'react';
import Axios from 'axios';
import MovieListItems from './MovieListItems';
import './Movie.css';

export default class Movie extends Component {
  state = {
    movies: []
  };

  getMovies = url => {
    Axios.get(url)
      .then(res => {
        const movies = res.data.results;

        this.setState({
          movies
        });
      })
      .catch(err => {
        console.log(err);
      });
  };

  componentDidMount() {
    this.getMovies(this.props.url);
  }

  componentWillReceiveProps(nextProps) {
    if (this.props.url != nextProps.url) {
      this.getMovies(nextProps.url);
    }
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
