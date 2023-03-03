import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
  :root{
    --color-primary:orange;
    --color-secondary:red;
  }
  
  *,
  *::before,
  *::after {
    box-sizing: border-box;
  }

  body {
    margin: 0;
    font-family: system-ui;
  }
`;
