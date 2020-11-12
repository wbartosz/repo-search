import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import SearchIcon from './SearchIcon';
import './Header.css';

const Header = (props) => {
  const [searchValue, setSearchValue] = useState('');
  let history = useHistory();

  function handleChange(event) {
    setSearchValue(event.target.value);
  }

  function handleSearch(event) {
    event.preventDefault();
    history.push(`/search/${searchValue}`);
  }
  
  return (
    <header>
      <form onSubmit={handleSearch} className="container">
        <div className="search__wrapper">
          <SearchIcon />

          <input
            value={searchValue}
            onChange={handleChange}
            className="search-input"
            id="search-input"
            placeholder="Search a repository">
          </input>

          <button
            type="submit"
            className="search__button"
            disabled={!searchValue}
          >
            Search
          </button>
        </div>
      </form>
    </header>
  );
}

export default Header;