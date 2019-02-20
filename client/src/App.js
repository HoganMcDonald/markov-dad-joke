import React, { Component } from 'react';

class App extends Component {
  componentDidMount() {
    fetch('/api/generated_jokes')
      .then(res => res.json())
      .then(body => console.log(body));
  }

  render() {
    return <main />;
  }
}

export default App;
