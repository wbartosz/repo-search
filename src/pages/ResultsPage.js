import React, { useState, useEffect } from 'react';
import RepoList from '../components/RepoList';
import CustomSelect from '../components/CustomSelect';
import { useFetch, GH_BASE_URL } from '../helpers';

const REPO_SEARCH_URL = `${GH_BASE_URL}/search/repositories`;

const sortByItems = [
  { value: '', description: 'Best match' },
  { value: 'stars', description: 'Most stars' },
  { value: 'forks', description: 'Most forks' }
];

const sortByOptions = sortByItems.map((sb) => (
  <option key={sb.value} value={sb.value}>{sb.description}</option>
));

const validSortBys = sortByItems.map(({ value }) => value);

const ResultsPage = (props) => {
  const keyword = props.match.params.keyword;

  const [repos, setRepos] = useState([]);
  const [sortBy, setSortBy] = useState();

  let queryParams = {
    page: new URLSearchParams({}),
    fetch: new URLSearchParams({ q: keyword })
  }

  if(sortBy && isSortByParamValid(sortBy)) {
    queryParams.page.append('sort', sortBy);
    queryParams.fetch.append('sort', sortBy);
  }

  const { response, isLoading } = useFetch(
    `${REPO_SEARCH_URL}?${queryParams.fetch}`
  );

  console.log('response', response);

  useEffect(() => {
    console.log('useEffect');
    setRepos(response ? response.items : []);
  },[response, sortBy]);

  function handleSortChange(event) {
    setSortBy(event.target.value);
  }

  const results = repos && repos.length
    ? <div>
        <CustomSelect
          value={sortBy}
          options={sortByItems}
          valueChange={handleSortChange}
        />

        <RepoList repos={repos} />
      </div>
    : <p>No results found for keyword '{keyword}'</p>;

  return (
    <>
      <h1 className="border-bottom--light">Repositories</h1>
      {isLoading
        ? <p>Loading...</p>
        : results
      }
    </>
  );
}

function isSortByParamValid(sortBy) {
  return validSortBys.some((sb) => sb === sortBy);
}

export default ResultsPage;