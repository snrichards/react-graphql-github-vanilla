import React from 'react';

const Issue = ({ issue }) => (
  <li key={issue.node.id}>
    <a href={issue.node.url}>{issue.node.title}</a>
  </li>
);

export default Issue;
