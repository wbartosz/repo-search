import React from 'react';
import ExternalLink from './ExternalLink';
import './RepoDetails.css';

const RepoDetails = (props) => {
  const { name, html_url, homepage, description, owner, stargazers_count, language } = props.details;
  
  return (
    <div className="RepoDetails">
      <div className="RepoDetails__header">
        <h2 className="RepoDetails__title">
          {name}
          <span className="badge">{stargazers_count} Stars</span>
        </h2>

        <div className="RepoDetails__media border-bottom--light">
          <ExternalLink url={html_url}>GitHub</ExternalLink>
          {homepage && <ExternalLink url={homepage}>Website</ExternalLink>}
        </div>
      </div>

      <p className="RepoDetails__description">{description}</p>

      <div><b>Owner:</b> {owner.login}</div>
      <div><b>Language:</b> {language}</div>
    </div>
  );
}

export default RepoDetails;