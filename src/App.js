import React, { Component } from 'react';
import axios from 'axios';
import GithubIssuesSearchForm from './GithubIssuesSearchForm';

const axiosGitHubGraphQL = axios.create({
  baseURL: 'https://api.github.com/graphql',
  headers: {
    Authorization: `bearer ${process.env.REACT_APP_GITHUB_TOKEN}`,
  },
});

const TITLE = 'React GraphQL GitHub Client';

class App extends Component {
  state = {
    path: 'the-road-to-learn-react/the-road-to-learn-react',
  };

  componentDidMount() {}

  onChange = (event) => {
    console.log(event.target.value);
    this.setState({ path: event.target.value });
  };

  onSubmit = (event) => {
    event.preventDefault();
  };

  render() {
    return (
      <div>
        <h1>{TITLE}</h1>

        <GithubIssuesSearchForm onSubmit={this.onSubmit} onChange={this.onChange} path={this.state.path} />

        <hr />
      </div>
    );
  }
}

export default App;
