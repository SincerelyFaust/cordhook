import type { AppProps } from "next/app";
import { ThemeProvider } from "styled-components";
import { LightTheme, DarkTheme } from "../utils/Theme";
import { usePreferredTheme } from "../utils/hooks/usePreferredTheme";
import { GlobalStyles } from "../styles/GlobalStyles";

export default function Cordhook({ Component, pageProps }: AppProps) {
  const preferredTheme = usePreferredTheme();
  return (
    <>
      <ThemeProvider theme={preferredTheme === "dark" ? DarkTheme : LightTheme}>
        <GlobalStyles />
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  );
}
