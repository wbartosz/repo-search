import React from 'react';
import { useHistory } from 'react-router-dom';
import './RepoList.css';

const RepoList = (props) => {
  let history = useHistory();

  function handleRowClick(row) {
    history.push(`/repos/${row.owner.login}/${row.name}`)
  }

  return (
    <table className="RepoList">
      <tr>
        <th>Name</th>
        <th className="hidden-xs">Stars</th>
        <th className="hidden-xs">Language</th>
        <th>Owner</th>
      </tr>

      {props.repos.map((repo) => (
        <tr onClick={() => handleRowClick(repo)}>
          <td><strong>{repo.name}</strong></td>
          <td className="hidden-xs">{repo.stargazers_count}</td>
          <td className="hidden-xs">{repo.language}</td>
          <td>{repo.owner.login}</td>
        </tr>
      ))}
    </table>
  );
}

export default RepoList;