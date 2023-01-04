import type { AppProps } from "next/app";
import { ThemeProvider } from "styled-components";
import { LightTheme, DarkTheme } from "../utils/Theme";
import { usePreferredTheme } from "../utils/hooks/usePreferredTheme";
import { GlobalStyles } from "../styles/GlobalStyles";
import Head from "next/head";

export default function Cordhook({ Component, pageProps }: AppProps) {
  const preferredTheme = usePreferredTheme();

  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width" />
      </Head>
      <ThemeProvider theme={preferredTheme === "dark" ? DarkTheme : LightTheme}>
        <GlobalStyles />
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  );
}
