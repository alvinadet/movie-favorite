import React, { Component } from 'react';
import Axios from 'axios';
import Loading from './Loading';
import MovieData from './MovieData';

class Movie extends Component {
  state = {
    movie: {},
    isLoading: true
  };
  getMovieId = () => {
    Axios.get(
      `https://api.themoviedb.org/3/movie/${
        this.props.match.params.id
      }?api_key=4b79163ef3bf5048e4b25dbf42578ca3&language=en-US`
    )
      .then(res => {
        const movie = res.data;
        this.setState({
          movie,
          isLoading: false
        });
        console.log(this.state.movie);
      })
      .catch(err => {
        console.log(err, '>>>>Movie');
      });
  };

  componentDidMount() {
    this.getMovieId();
  }
  render() {
    const { isLoading, movie } = this.state;
    return <div>{isLoading ? <Loading /> : <MovieData {...this.state} />}</div>;
  }
}

export default Movie;
