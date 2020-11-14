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
      <form onSubmit={handleSearch} className="container">
        <div className="search__wrapper">
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
          </button>
        </div>
      </form>
    </header>
  );
}

export default Header;