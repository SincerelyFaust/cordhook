import { DefaultTheme } from "styled-components";

export const DarkTheme: DefaultTheme = {
  name: "dark",
  background: {
    backgroundColor: "#1a1a1a",
    backgroundColorLight: "#252525",
    backgroundColorDark: "#1c1c1c",
    backgroundColorContrast: "#1f1f1f",
  },
  accent: {
    accentColorPrimary: "#9733ee",
    accentColorSecondary: "#da22ff",
  },
  text: {
    textColor: "#acacac",
    textColorDark: "#6b6b6b",
    textColorLight: "#ffffff",
    textColorExtremelyLight: "#ffffff",
  },
  error: {
    light: "#e57373",
    main: "#f44336",
    dark: "#d32f2f",
  },
};

export const LightTheme: DefaultTheme = {
  name: "light",
  background: {
    backgroundColor: "#FFFDFA",
    backgroundColorLight: "#F2F2F2",
    backgroundColorDark: "#B3B2B1",
    backgroundColorContrast: "#E3E3E3",
  },
  accent: {
    accentColorPrimary: "#9733ee",
    accentColorSecondary: "#da22ff",
  },
  text: {
    textColor: "#333332",
    textColorDark: "#999999",
    textColorLight: "#4D4C4B",
    textColorExtremelyLight: "#000000",
  },
  error: {
    light: "#e57373",
    main: "#f44336",
    dark: "#d32f2f",
  },
};
