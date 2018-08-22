import React from 'react';
import Reactions from './Reactions';

const Issue = ({ issue }) => (
  <li key={issue.node.id}>
    <a href={issue.node.url}>{issue.node.title}</a>
    <Reactions reactions={issue.node.reactions} />
  </li>
);

export default Issue;
