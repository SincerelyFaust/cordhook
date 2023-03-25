import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
*, *::before, *::after {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: "Roboto", sans-serif;
}

html {
  background: ${({ theme }) => theme.background.backgroundColor};
  scroll-behavior: smooth;
  overflow-x: hidden;
}

body {
  width: 100vw;
}

::-webkit-scrollbar {
  width: 0.25em;
}
 
::-webkit-scrollbar-track {
  box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
  background-color: ${({ theme }) => theme.background.backgroundColor};
}
 
::-webkit-scrollbar-thumb {
  background: gray;
  border-radius: 8px;
  outline: 1px solid ${({ theme }) => theme.background.backgroundColorLight};
}
`;
