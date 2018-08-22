import React from 'react';
import Issues from './Issues';

const Repository = ({ repository }) => (
  <div>
    <p>
      <strong>In Repository:</strong>
      <a href={repository.url}>{repository.name}</a>
    </p>

    <Issues issues={repository.issues} />
  </div>
);

export default Repository;
