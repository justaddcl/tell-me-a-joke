import React from 'react';
import styled from 'styled-components';
import { colors, typography } from './styles/theme';
import { useJoke } from '../context/JokeContext';

const StyledSetup = styled.p`
  color: ${colors.indigo[900]};
  font-size: ${typography.font.size.large};

  &:before {
    color: ${colors.indigo[300]};
    content: 'Q: ';
  }
`;

const Setup = () => {
  const { joke } = useJoke();
  return <StyledSetup>{joke.setup}</StyledSetup>;
};

export default Setup;
