
// import { createGlobalStyle } from "styled-components";

// const GlobalStyle = createGlobalStyle`
//   body {
//     background-color: ${({ theme }) => theme.body};
//     color: ${({ theme }) => theme.text};
//     margin: 0;
//     font-family: Arial, sans-serif;
//     transition: all 0.3s ease;
//   }
// `;

// export default GlobalStyle;

import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  body {
    background: ${({ theme }) => theme.body};
    color: ${({ theme }) => theme.text};
    transition: all 0.3s ease;
    font-family: 'Arial', sans-serif;
  }
`;

export default GlobalStyle;
