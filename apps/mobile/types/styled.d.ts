import "styled-components/native";

type Hex = `#${string}`;
declare module "styled-components/native" {
  export interface DefaultTheme {
    type: "light" | "dark";
    background: {
      backgroundColor: Hex;
      backgroundColorLight: Hex;
      backgroundColorDark: Hex;
      backgroundColorContrast: Hex;
    };
    text: {
      textColor: Hex;
      textColorLight: Hex;
      textColorDark: Hex;
      textColorExtremelyLight: Hex;
    };
    accent: {
      accentColor: Hex;
      accentColorLight: Hex;
      accentColorDark: Hex;
    };
    error: {
      light: Hex;
      main: Hex;
      dark: Hex;
    };
  }
}
