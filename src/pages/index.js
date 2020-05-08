import React, { useState } from 'react';
import styled from 'styled-components';

import { useJoke } from '../context/JokeContext';
import Loading from '../components/Loading';
import Error from '../components/Error';
import Joke from '../components/Joke';
import Button from '../components/Button';

const Messages = styled.div`
  height: 20px;
  margin-bottom: 16px;
`;

export default () => {
  const { setJoke } = useJoke();
  const [clicked, setClicked] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const JOKE_API = {
    random: 'https://official-joke-api.appspot.com/jokes/random',
    programming:
      'https://official-joke-api.appspot.com/jokes/programming/random',
  };

  const getJoke = async () => {
    const data = await fetch(JOKE_API.random);
    return data.json();
  };

  const renderJoke = async () => {
    setLoading(true);
    setError('');
    await getJoke()
      .then(data => {
        setJoke(data);
        setLoading(false);
      })
      .catch(e => {
        setLoading(false);
        setError(e);
        setJoke('');
        console.error(
          `Uh-oh...looks we got an error: no joke. Here are the details: ${
            e.message
          }`
        );
      });
    setClicked(true);
  };

  return (
    <div>
      <Messages>
        {loading && <Loading />}
        {error && <Error />}
      </Messages>
      <Joke />
      <Button onClick={renderJoke}>
        {`Tell me a${clicked ? 'nother' : ''} joke!`}
      </Button>
    </div>
  );
};
