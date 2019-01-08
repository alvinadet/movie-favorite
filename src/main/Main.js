import React, { Component } from 'react';
import Navigation from './navigation/Navigation';
import Movie from './movies/Movie';
import './Main.css';

export default class Main extends Component {
  render() {
    return (
      <section className="main">
        <Navigation />
        <Movie />
      </section>
    );
  }
}
