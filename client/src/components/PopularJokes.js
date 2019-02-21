import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

import Joke from './Joke';

const Container = styled.div`
  width: 100%;
  height: 100%;
  border-radius: 8px;
  background-color: ${({ theme }) => theme.colors.fg};
  overflowy: scroll;
  padding: 1rem;
`;

const Heading = styled.h2`
  color: ${({ theme }) => theme.colors.accent};
`;

const PopularJokes = () => {
  const [data, setData] = useState({ jokes: [] });
  const fetchJokes = async () => {
    const result = await fetch('/api/generated_jokes');
    const jokes = await result.json();
    setData({ jokes });
  };
  useEffect(() => {
    fetchJokes();
  }, []);

  return (
    <Container>
      <Heading>Popular Jokes</Heading>
      {data.jokes.map((joke, i) => (
        <Joke joke={joke} key={i} />
      ))}
    </Container>
  );
};

export default PopularJokes;
