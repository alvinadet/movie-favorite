import React, { Component } from 'react';
import './Navigation.css';
import Selection from './Selection';
import Slider from './Slider';
import Axios from 'axios';

export default class Navigation extends Component {
  state = {
    genre: 'Comedy',
    genres: [],
    year: {
      label: 'year',
      min: 1990,
      max: 2018,
      step: 1,
      value: { min: 2000, max: 2018 }
    },
    rating: {
      label: 'rating',
      min: 0,
      max: 10,
      step: 1,
      value: { min: 8, max: 10 }
    },
    runtime: {
      label: 'runtime',
      min: 0,
      max: 300,
      step: 15,
      value: { min: 60, max: 100 }
    }
  };

  getGenres = () => {
    Axios.get(
      'https://api.themoviedb.org/3/genre/movie/list?api_key=4b79163ef3bf5048e4b25dbf42578ca3&language=en-US'
    ).then(res => {
      this.setState({
        genres: res.data.genres
      });
      console.log(this.state.genres);
    });
  };

  componentDidMount() {
    this.getGenres();
  }

  onSliderChange = data => {
    this.setState({
      [data.type]: { ...this.state[data.type], value: data.value }
    });
  };

  onGenreChange = event => {
    this.setState({
      genre: event.target.value
    });
  };

  render() {
    const { genre, genres, year, rating, runtime } = this.state;
    const { onGenreChange, onSliderChange } = this;
    return (
      <section className="navigation">
        <Selection
          genre={genre}
          genres={genres}
          onGenreChange={onGenreChange}
        />
        <Slider data={year} onSliderChange={onSliderChange} />
        <Slider data={rating} onSliderChange={onSliderChange} />
        <Slider data={runtime} onSliderChange={onSliderChange} />
      </section>
    );
  }
}
