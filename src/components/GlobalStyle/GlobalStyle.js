import { createGlobalStyle } from "styled-components";
import "modern-normalize/modern-normalize.css";

export const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
  }
  body {
    margin: 0;
    padding-top: 0;
    padding-bottom: 0;
    font-family: ${(p) => p.theme.fonts.main};
    background: lightskyblue;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    &.open-modal{
      overflow: hidden;
    }
  }
  h1,h2,h3,h4,h5,h6,p {
    margin: 0;
  }
  a {
    text-decoration: none;
    color: inherit;
  }
  ul, ol {
    padding: 0;
    margin: 0;
    list-style: none;
  }
  img {
    display: block;
    max-width: 100%;
    height: auto;
  }
  button{
    cursor: pointer;
  }
`;
