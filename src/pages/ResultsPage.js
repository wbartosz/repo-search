import React, { useState, useEffect } from 'react';
import RepoList from '../components/RepoList';
import { useFetch, GH_BASE_URL } from '../helpers';

const REPO_SEARCH_URL = `${GH_BASE_URL}/search/repositories?q=`;

const ResultsPage = (props) => {
  const [repos, setRepos] = useState([]);
  const keyword = props.match.params.keyword;

  const { response, error, isLoading } = useFetch(
    `${REPO_SEARCH_URL}${keyword}`
  );

  useEffect(() => {
    setRepos(response ? response.items : []);
  },[response]);

  const results = repos.length
    ? <RepoList repos={repos} />
    : <div>No results found for keyword '{keyword}'</div>;

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

export default ResultsPage;