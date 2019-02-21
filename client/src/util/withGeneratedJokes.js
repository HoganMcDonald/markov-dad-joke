import React, { Component, createContext } from 'react';

const { Provider, Consumer } = createContext();

class GeneratedJokesProvider extends Component {
  constructor(props) {
    super(props);
    this.state = {
      jokes: [],
      fetchJokes: this.fetchJokes
    };
  }

  componentDidMount() {
    this.fetchJokes();
  }

  fetchJokes = async () => {
    const result = await fetch('/api/generated_jokes');
    const jokes = await result.json();
    this.setState({
      jokes
    });
  };

  render() {
    return <Provider value={this.state}>{this.props.children}</Provider>;
  }
}

const withGeneratedJokes = Component => {
  return function withGeneratedJokes(props) {
    return (
      <Consumer>
        {state => <Component {...props} generatedJokes={state} />}
      </Consumer>
    );
  };
};

export { GeneratedJokesProvider, withGeneratedJokes };
