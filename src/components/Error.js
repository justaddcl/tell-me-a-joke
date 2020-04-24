import React from 'react';
import styled from 'styled-components';
import { colors } from './styles/theme';

const StyledError = styled.span`
  color: ${colors.red[600]};
`;

const Error = () => (
  <StyledError>
    Uh-oh... looks we got an error: no joke. (😂). Try again?
  </StyledError>
);

export default Error;
