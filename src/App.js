import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './header/Header';
import Navigation from './main/navigation/Navigation';
import Movie from './main/movies/Movie';

class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <Navigation />
        <Movie />
      </div>
    );
  }
}

export default App;
