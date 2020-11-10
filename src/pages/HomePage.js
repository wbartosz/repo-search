import React from 'react';

const HomePage = () => {
  return (
    <>
      <h1 className="border-bottom--light">Repositories</h1>
      <a onClick={searchInputFocus}>Search a repository</a>
    </>      
  );
}

function searchInputFocus() {
  const searchInput = document.getElementById('search-input');
  searchInput.focus();
}

export default HomePage;