import React from 'react';
import styled from 'styled-components';
import { colors, typography } from './styles/theme';

const StyledSetup = styled.p`
  color: ${colors.indigo[900]};
  font-size: ${typography.font.size.large};

  &:before {
    color: ${colors.indigo[300]};
    content: 'Q: ';
  }
`;

const Setup = ({ setup }) => <StyledSetup>{setup}</StyledSetup>;

export default Setup;
