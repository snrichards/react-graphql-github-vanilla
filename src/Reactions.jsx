import React from 'react';
import Reaction from './Reaction';

const Reactions = ({ reactions }) => (
  <ul>
    {reactions.edges.map((reaction) => (
      <Reaction reaction={reaction} />
    ))}
  </ul>
);

export default Reactions;
