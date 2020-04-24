import React from 'react';
import Setup from './Setup';
import Punchline from './Punchline';

const Joke = ({ joke }) => {
  return (
    <>
      <Setup setup={joke.setup} />
      <Punchline punchline={joke.punchline} />
    </>
  );
};

export default Joke;
