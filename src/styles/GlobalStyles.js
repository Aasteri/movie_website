import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
  body {
    background-color: #f8f9fa;
    color: #212529;
  }

  a {
    color: inherit;
    text-decoration: none;
  }

  /* Optional: Customize Bootstrap variables if needed */
`;

export default GlobalStyles;
