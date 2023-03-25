import { withThemesProvider } from "storybook-addon-styled-component-theme";
import { ThemeProvider } from "styled-components";
import { DarkTheme, LightTheme } from "../utils/Theme";
import { GlobalStyles } from "../styles/GlobalStyles";
import React from "react";

const themes = [DarkTheme, LightTheme];
const themeDecorator = (storyFn: any) => (
  <ThemeProvider theme={DarkTheme}>
    <GlobalStyles />
    {storyFn()}
  </ThemeProvider>
);
export const decorators = [
  withThemesProvider(themes, ThemeProvider),
  themeDecorator,
];

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
};
