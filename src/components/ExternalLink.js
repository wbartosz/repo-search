import React from 'react';

const ExternalLink = (props) => {
  return (
    <a
      href={props.url}
      target="_blank"
      rel="noopener noreferrer">
        {props.children}
    </a>
  );
}

export default ExternalLink;