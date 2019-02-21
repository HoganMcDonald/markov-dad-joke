import React from 'react';
import styled from 'styled-components';

const JokeWrapper = styled.div`
  width: 100%;
  margin-bottom: 1rem;
`;

const Text = styled.p`
  color: ${({ theme }) => theme.colors.lightGrey};
  margin: 0;
`;

const Joke = ({ joke }) => (
  <JokeWrapper>
    <Text>{joke.joke}</Text>
  </JokeWrapper>
);

export default Joke;
