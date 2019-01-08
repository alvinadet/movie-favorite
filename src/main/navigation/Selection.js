import React, { Component } from 'react';

export default class Selection extends Component {
  state = {
    genre: 'comedy'
  };

  onGenreChange = event => {
    this.setState({
      genre: event.target.value
    });
  };
  render() {
    const { genre } = this.state;
    return (
      <div className="selection">
        <label>Genre</label>
        <select value={genre}>
          <option value="comedy">Comedy</option>
          <option value="action">Action</option>
          <option value="drama">Drama</option>
        </select>
      </div>
    );
  }
}
