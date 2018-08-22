import React from 'react';
import Issues from './Issues';

const Repository = ({ repository, onFetchMoreIssues, onStarRepository }) => (
  <div>
    <p>
      <strong>In Repository:</strong>
      <a href={repository.url}>{repository.name}</a>
    </p>

    <button type="button" onClick={() => onStarRepository(repository.id, repository.viewerHasStarred)}>
      {repository.stargazers.totalCount}
      {repository.viewerHasStarred ? ' Unstar' : ' Star'}
    </button>

    <Issues issues={repository.issues} />

    <hr />

    {repository.issues.pageInfo.hasNextPage && <button onClick={onFetchMoreIssues}>button</button>}
  </div>
);

export default Repository;
