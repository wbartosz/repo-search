import React from 'react';
import { searchInputFocus } from '../helpers';

const HomePage = () => {
  return (
    <>
      <h1 className="border-bottom--light">Repositories</h1>

      <button className="btn__link" onClick={searchInputFocus}>Search a repository</button>
    </>      
  );
}

export default HomePage;