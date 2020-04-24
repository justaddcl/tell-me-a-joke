import React from 'react';
import styled from 'styled-components';
import { colors, typography } from './styles/theme';

const StyledPunchline = styled.p`
  color: ${colors.grey[700]};
  font-size: ${typography.font.size.large};

  &:before {
    color: ${colors.indigo[300]};
    content: 'A: ';
  }
`;

const Punchline = ({ punchline }) => (
  <StyledPunchline>{punchline}</StyledPunchline>
);

export default Punchline;
