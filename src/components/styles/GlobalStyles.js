import { createGlobalStyle } from 'styled-components';
import { colors, padding, typography } from './theme';

const GlobalStyles = createGlobalStyle`
 body {
   background-color: ${colors.indigo[100]};
   font-family: ${typography.font.family};
   font-size: ${typography.font.size.baseSize};
   padding: ${padding.large};
 }

 main {
   display: flex;
   flex-direction: column;
   align-items: flex-start;
 }
`;

export default GlobalStyles;
