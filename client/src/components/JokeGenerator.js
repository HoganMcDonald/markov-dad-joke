import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

import { withGeneratedJokes } from '../util/withGeneratedJokes';

const ContentWrapper = styled.div`
  padding: 2rem;
`;

const Title = styled.h1`
  color: ${({ theme }) => theme.colors.accent};
  text-align: center;
  margin-top: 4rem;
`;

const Description = styled.p`
  color: ${({ theme }) => theme.colors.lightGrey};
  max-width: 500px;
  margin: auto;
`;

const Link = styled.a`
  color: ${({ theme }) => theme.colors.seafoam};
`;

const GeneratedJoke = styled.h3`
  background-color: ${({ theme }) => theme.colors.grey};
  color: ${({ theme }) => theme.colors.bg};
  padding: 2rem;
  margin: 2rem auto;
  border-radius: 8px;
  display: flex;
  justify-content: center;
  max-width: 500px;
`;

const Buttons = styled.div`
  display: flex;
  justify-content: center;
  margin: auto;
`;

const GenerateButton = styled.button`
  background: none;
  color: ${({ theme }) => theme.colors.red};
  border: solid 2px ${({ theme }) => theme.colors.red};
  padding: 0.5rem;
  margin: 1rem;
  cursor: pointer;
  transition: ${({ theme }) => theme.transition};
  pointer-events: ${({ generating }) => (generating ? 'none' : 'auto')};

  &:hover {
    background-color: ${({ theme }) => theme.colors.red};
    color: ${({ theme }) => theme.colors.fg};
  }
`;

const SaveButton = styled(GenerateButton)`
  color: ${({ theme }) => theme.colors.seafoam};
  border-color: ${({ theme }) => theme.colors.seafoam};
  &:hover {
    background-color: ${({ theme }) => theme.colors.seafoam};
  }
`;

const JokeGenerator = ({ generatedJokes }) => {
  const [data, setData] = useState({ joke: '' });
  const [generating, setGenerating] = useState(false);

  const generateJoke = async () => {
    if (generating) {
      try {
        const result = await fetch('/api/generate_joke');
        const joke = await result.json();
        setData(joke);
      } catch (err) {
        alert('Unable to generate new joke.');
      }
      setGenerating(false);
    }
  };

  const saveJoke = async () => {
    try {
      if (data.joke) {
        await fetch('/api/generated_jokes', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(data)
        });
        await generatedJokes.fetchJokes();
      } else {
        alert('First, generate a joke.');
      }
    } catch (err) {
      alert('Unable to save joke.');
    }
  };

  useEffect(() => {
    generateJoke();
  }, [generating]);

  return (
    <ContentWrapper>
      <Title>Markov Dad Joke Generator</Title>
      <Description>
        Generate new dad jokes based on the internet's largest collection from{' '}
        <Link href={'https://icanhazdadjoke.com/'}>icanhazdadjoke.com</Link>.
        Dad jokes are generated on the fly using a{' '}
        <Link href={'https://en.wikipedia.org/wiki/Markov_chain'}>
          Markov Chain
        </Link>
        .
      </Description>
      <GeneratedJoke>{data.joke}</GeneratedJoke>
      <Buttons>
        <GenerateButton
          disabled={generating}
          onClick={() => setGenerating(true)}
        >
          Generate Joke
        </GenerateButton>
        <SaveButton onClick={saveJoke}>Save Joke</SaveButton>
      </Buttons>
    </ContentWrapper>
  );
};

export default withGeneratedJokes(JokeGenerator);
