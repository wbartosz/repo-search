import React, { useState } from 'react';
import { useHistory, matchPath } from 'react-router-dom';
import { searchInputFocus } from '../helpers'; 
import SearchIcon from './SearchIcon';
import './HeaderSearch.css';

const HeaderSearch = () => {
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
    <form onSubmit={handleSearch} className="HeaderSearch container" role="search">
      <div className="HeaderSearch__wrapper">
        <label htmlFor="header-search-input" className="visually-hidden">Search</label>
        <input
          value={searchValue}
          onChange={handleChange}
          className="HeaderSearch__input"
          id="header-search-input"
          placeholder="Search a repository">
        </input>

        <button
          type="submit"
          className="HeaderSearch__button"
        >
          <SearchIcon />
          <span className="visually-hidden">Search</span>
        </button>
      </div>
    </form>
  );
}

export default HeaderSearch;