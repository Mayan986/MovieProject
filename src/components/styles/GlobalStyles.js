import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }
  html {
    font-size: 62.5%;
  }
  body {
    background-color: ${({ theme }) => theme.color.primary};
    line-height: 1.5;
    font-size: 1.6rem;
    font-family: Arial, Helvetica, sans-serif;
    box-sizing: inherit;
  }
  a{
    text-decoration: none;
  }
`;
