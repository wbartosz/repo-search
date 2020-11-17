import React, { useState } from 'react';
import { useHistory, matchPath } from 'react-router-dom';
import SearchIcon from './SearchIcon';
import { searchInputFocus } from '../helpers'; 
import './Header.css';

const Header = (props) => {
  let history = useHistory();

  const match = matchPath(history.location.pathname, {
    path: '/search/:keyword',
    exact: true,
    strict: false
  });

  const keyword = match ? match.params.keyword : '';
  const [searchValue, setSearchValue] = useState(keyword);

  function handleChange(event) {
    setSearchValue(event.target.value);
  }

  function handleSearch(event) {
    event.preventDefault();
    if(searchValue) {
      history.push(`/search/${searchValue}`);
    } else {
      searchInputFocus();
    }
  }
  
  return (
    <header>
      <form onSubmit={handleSearch} className="container" role="search">
        <div className="search__wrapper">
          <label htmlFor="search-input" className="visually-hidden">Search</label>
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
          >
            <SearchIcon />
            <span className="visually-hidden">Search</span>
          </button>
        </div>
      </form>
    </header>
  );
}

export default Header;