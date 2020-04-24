import React from 'react';
import styled from 'styled-components';
import { borderRadius, colors, padding } from './styles/theme';

const StyledButton = styled.button`
  background-color: ${colors.indigo[500]};
  border: none;
  border-radius: ${borderRadius};
  color: ${colors.indigo[100]};
  padding: ${padding.medium};

  &:hover {
    background-color: ${colors.indigo[600]};
  }

  &:focus {
    outline: none;
  }

  &:active {
    background-color: ${colors.indigo[700]};
    border-bottom: 4px solid ${colors.indigo[900]};
    outline: none;
    padding-bottom: 20px;
  }
`;

const Button = ({ children, onClick }) => {
  return (
    <StyledButton type="button" onClick={onClick}>
      {children}
    </StyledButton>
  );
};

export default Button;
