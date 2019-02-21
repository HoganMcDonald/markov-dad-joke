import React, { Component } from 'react';
import { ThemeProvider } from 'styled-components';
import Typography from 'typography';
import { TypographyStyle, GoogleFont } from 'react-typography';

import { theme } from './styles/theme';
import Layout from './components/Layout';

class App extends Component {
  state = {
    type: { ...theme.type }
  };

  componentDidMount() {
    window.addEventListener('resize', this.updateType);
  }

  componentWillUnmount() {
    window.addEventListener('resize', this.updateType);
  }

  updateType = () => {
    if (window.matchMedia('(max-width: 1000px)').matches) {
      this.setState({
        type: {
          ...this.state.type,
          scaleRatio: 2.6
        }
      });
    } else {
      this.setState({
        type: {
          ...this.state.type,
          scaleRatio: theme.type.scaleRatio
        }
      });
    }
  };

  render() {
    const { type } = this.state;
    const typography = new Typography(type);
    return (
      <ThemeProvider theme={theme}>
        <>
          <TypographyStyle typography={typography} />
          <GoogleFont typography={typography} />
          <Layout />
        </>
      </ThemeProvider>
    );
  }
}

export default App;
