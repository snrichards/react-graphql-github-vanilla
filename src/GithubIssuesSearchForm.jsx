import React from 'react';

const GithubIssuesSearchForm = ({ onSubmit, onChange, path }) => (
  <form onSubmit={onSubmit}>
    <label htmlFor="url">Show open issues for https://github.com/</label>
    <input id="url" type="text" value={path} onChange={onChange} style={{ width: '300px' }} />
    <button type="submit">Search</button>
  </form>
);

export default GithubIssuesSearchForm;
