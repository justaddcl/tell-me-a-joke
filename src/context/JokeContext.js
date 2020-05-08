import React, { createContext, useContext, useState } from 'react';

const JokeContext = createContext();

const JokeProvider = ({ children }) => {
  const [joke, setJoke] = useState({
    setup: '',
    punchline: '',
  });

  return (
    <JokeContext.Provider value={{ joke, setJoke }}>
      {children}
    </JokeContext.Provider>
  );
};

const useJoke = () => useContext(JokeContext);

export default JokeContext;
export { JokeProvider, useJoke };
