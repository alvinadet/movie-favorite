import React from 'react';
import './SearchButton.css';

const SearchButton = ({ onSearchButtonClick }) => (
  <div className="search-button">
    <button onClick={onSearchButtonClick}>Search</button>
  </div>
);

export default SearchButton;
