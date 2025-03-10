import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`

  * {
    padding: 0;
    border: 0;
    font-size: 100%;
    vertical-align: baseline;
    box-sizing: border-box; 
    font-family: ${({ theme }) => theme.fontFamily.primary};
    color: ${({ theme }) => theme.colors.black_neutral};    
    -webkit-user-drag: none;
  }

  body {
    padding: 0;
    margin: 0;
    position: relative;
  }

`;
