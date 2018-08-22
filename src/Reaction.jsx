import React from 'react';

const Reaction = ({ reaction }) => <li key={reaction.node.id}>{reaction.node.content}</li>;

export default Reaction;
