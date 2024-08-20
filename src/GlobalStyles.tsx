import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  body {
    font-family: Inter, Helvetica, Sans-Serif;
  }

  fieldset {
    border: none;
    padding: 0;
    margin: 0;
  }
`;

export default GlobalStyle;
