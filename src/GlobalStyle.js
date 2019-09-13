import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
    * {
      box-sizing: border-box;
      margin: 0;
      padding: 0
   }
    
    body {
      font-family: "Open Sans Condensed", sans-serif;
   }
   a {
      text-decoration: none;
      color: black;
   }
   
`;
export default GlobalStyle;