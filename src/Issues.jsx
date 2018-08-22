import React from 'react';
import Issue from './Issue';

const Issues = ({ issues }) => (
  <ul>
    {issues.edges.map((issue) => (
      <Issue issue={issue} />
    ))}
  </ul>
);

export default Issues;
