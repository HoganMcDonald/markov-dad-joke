import React from 'react';
import styled from 'styled-components';

import Joke from './Joke';
import { withGeneratedJokes } from '../util/withGeneratedJokes';

const Container = styled.div`
  width: 100%;
  height: 100%;
  border-radius: 8px;
  background-color: ${({ theme }) => theme.colors.fg};
  overflow-y: scroll;
  padding: 1rem;
`;

const Heading = styled.h2`
  color: ${({ theme }) => theme.colors.accent};
`;

const PopularJokes = ({ generatedJokes }) => {
  return (
    <Container>
      <Heading>Popular Jokes</Heading>
      {generatedJokes.jokes
        .sort((a, b) => new Date(b.created_at) - new Date(a.created_at))
        .map((joke, i) => (
          <Joke joke={joke} key={i} />
        ))}
    </Container>
  );
};

export default withGeneratedJokes(PopularJokes);
