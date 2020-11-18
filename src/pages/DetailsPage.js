import React, { useState, useEffect } from 'react';
import RepoDetails from '../components/RepoDetails';
import { useFetch, GH_BASE_URL } from '../helpers';

const GET_REPO_URL = `${GH_BASE_URL}/repos`;

const DetailsPage = (props) => {
  const { match } = props;
  const [details, setDetails] = useState({});

  const { response, isLoading } = useFetch(
    `${GET_REPO_URL}/${match.params.owner}/${match.params.repo}`
  );

  useEffect(() => {
    setDetails(response);
  }, [response]);

  const loadedDetails = details && details.owner
    ? <RepoDetails details={details} />
    : <p>Repository not found</p>;

  return (
    <>
      {isLoading
        ? <p>Loading...</p>
        : loadedDetails
      }
    </>
  );
}

export default DetailsPage;