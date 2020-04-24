import React from 'react';
import styled from 'styled-components';
import { colors } from './styles/theme';

const StyledLoading = styled.span`
  color: ${colors.indigo[500]};
`;

const Loading = () => <StyledLoading>Loading joke...</StyledLoading>;

export default Loading;
