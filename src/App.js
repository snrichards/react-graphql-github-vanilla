import React, { Component } from 'react';
import axios from 'axios';
import GithubIssuesSearchForm from './GithubIssuesSearchForm';
import Organization from './Organization';

const axiosGitHubGraphQL = axios.create({
  baseURL: 'https://api.github.com/graphql',
  headers: {
    Authorization: `bearer ${process.env.REACT_APP_GITHUB_TOKEN}`,
  },
});

const TITLE = 'React GraphQL GitHub Client';

const GET_ISSUES_OF_REPOSITORY = `
  query ($organization: String!, $repository: String!) {
    organization(login: $organization) {
      name
      url
      repository(name: $repository) {
        name
        url
        issues(last: 5) {
          edges {
            node {
              id
              title
              url
            }
          }
        }
      }
    }
  }
`;

const getIssuesOfRepository = (path) => {
  const [organization, repository] = path.split('/');

  return axiosGitHubGraphQL.post('', { query: GET_ISSUES_OF_REPOSITORY, variables: { organization, repository } });
};

const resolveIssuesQuery = (queryResult) => () => ({
  organization: queryResult.data.data.organization,
  errors: queryResult.data.errors,
});

class App extends Component {
  state = {
    path: 'the-road-to-learn-react/the-road-to-learn-react',
    organization: null,
    errors: null,
  };

  componentDidMount() {
    this.onFetchFromGitHub(this.state.path);
  }

  onChange = (event) => {
    console.log(event.target.value);
    this.setState({ path: event.target.value });
  };

  onSubmit = (event) => {
    this.onFetchFromGitHub(this.state.path);

    event.preventDefault();
  };

  onFetchFromGitHub = (path) => {
    getIssuesOfRepository(path).then((queryResult) => this.setState(resolveIssuesQuery(queryResult)));
  };

  render() {
    const { path, organization, errors } = this.state;
    return (
      <div>
        <h1>{TITLE}</h1>

        <GithubIssuesSearchForm onSubmit={this.onSubmit} onChange={this.onChange} path={path} />

        <hr />

        {organization ? <Organization organization={organization} errors={errors} /> : <p>No infromation yet ...</p>}
      </div>
    );
  }
}

export default App;
