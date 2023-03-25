import "styled-components";

type Hex = `#${string}`;
declare module "styled-components" {
  export interface DefaultTheme {
    name: "light" | "dark";
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
      accentColorPrimary: Hex;
      accentColorSecondary: Hex;
    };
    error: {
      light: Hex;
      main: Hex;
      dark: Hex;
    };
  }
}
