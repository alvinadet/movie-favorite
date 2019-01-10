import React, { Component } from 'react';
import Navigation from './navigation/Navigation';
import Movies from './movies/Movies';
import Axios from 'axios';
import './Main.css';

export default class Main extends Component {
  state = {
    page: 2,
    total_pages: 1,
    moviesUrl: `https://api.themoviedb.org/3/discover/movie?api_key=4b79163ef3bf5048e4b25dbf42578ca3&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1`,
    url: `https://api.themoviedb.org/3/genre/movie/list?api_key=4b79163ef3bf5048e4b25dbf42578ca3&language=en-US`,
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
    },
    movies: []
  };

  onSliderChange = data => {
    this.setState({
      [data.type]: { ...this.state[data.type], value: data.value }
    });
  };

  setGenres = genres => {
    this.setState({
      genres
    });
  };

  onGenreChange = event => {
    this.setState({
      genre: event.target.value
    });
  };

  generateUrl = () => {
    const { genres, rating, year, runtime, page } = this.state;
    const selectedGenre = genres.find(genre => genre.name === this.state.genre);
    const genreId = selectedGenre.id;

    const moviesUrl =
      `https://api.themoviedb.org/3/discover/movie?` +
      `api_key=4b79163ef3bf5048e4b25dbf42578ca3&` +
      `language=en-US&sort_by=popularity.desc&` +
      `with_genres=${genreId}&` +
      `primary_release_date.gte=${year.value.min}-01-01&` +
      `primary_release_date.lte=${year.value.max}-12-31&` +
      `vote_average.gte=${rating.value.min}&` +
      `vote_average.lte=${rating.value.max}&` +
      `with_runtime.gte=${runtime.value.min}&` +
      `with_runtime.lte=${runtime.value.max}&` +
      `page=${page}`;

    this.setState({ moviesUrl });
  };

  onSearchButtonClick = () => {
    this.generateUrl();
  };

  getMovies = url => {
    Axios.get(url)
      .then(res => {
        const movies = res.data.results;

        this.setState({
          movies,
          total_pages: res.data.total_pages
        });
      })
      .catch(err => {
        console.log(err);
      });
  };

  onPageIncrease = () => {
    const { page, total_pages } = this.state;
    const nextPage = page + 1;
    if (nextPage <= total_pages) {
      this.setState({
        page: nextPage
      });
    }
  };

  onPageDecrease = () => {
    const { page, total_pages } = this.state;
    const nextPage = page - 1;
    if (nextPage > 0) {
      this.setState({
        page: nextPage
      });
    }
  };
  componentDidMount() {
    this.getMovies(this.state.moviesUrl);
  }

  componentWillUpdate(nextProps, nextState) {
    if (this.state.moviesUrl !== nextState.moviesUrl) {
      this.getMovies(nextState.moviesUrl);
    }
    if (this.state.page !== nextState.page) {
      this.generateUrl();
    }
  }

  render() {
    const {
      onGenreChange,
      onSliderChange,
      setGenres,
      onSearchButtonClick,
      onPageIncrease,
      onPageDecrease
    } = this;
    return (
      <section className="main">
        <Navigation
          onGenreChange={onGenreChange}
          onSliderChange={onSliderChange}
          setGenres={setGenres}
          onSearchButtonClick={onSearchButtonClick}
          {...this.state}
        />
        <Movies
          url={this.state.moviesUrl}
          {...this.state}
          onPageDecrease={onPageDecrease}
          onPageIncrease={onPageIncrease}
        />
      </section>
    );
  }
}
