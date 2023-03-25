import type { AppProps } from "next/app";
import Head from "next/head";
import { Inter } from "@next/font/google";
import {
  DarkTheme,
  LightTheme,
  GlobalStyles,
  ThemeProvider,
  usePreferredTheme,
} from "@cordhook/ui";
import { SWRConfig } from "swr";
import { fetcher } from "../utils/Fetcher";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const inter = Inter();

export default function App({ Component, pageProps }: AppProps) {
  const preferredTheme = usePreferredTheme();

  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width" />
      </Head>
      <SWRConfig
        value={{
          fetcher,
          refreshInterval: 12000000,
          revalidateOnFocus: false,
        }}
      >
        <ThemeProvider
          theme={preferredTheme === "dark" ? DarkTheme : LightTheme}
        >
          <main className={inter.className}>
            <GlobalStyles />
            <Component {...pageProps} />
            <ToastContainer
              position="bottom-center"
              autoClose={2000}
              hideProgressBar={false}
              newestOnTop={false}
              closeOnClick={false}
              rtl={false}
              pauseOnFocusLoss
              draggable
              closeButton={false}
              pauseOnHover
              theme={preferredTheme === "dark" ? "dark" : "light"}
              style={{ width: "700px", textAlign: "center" }}
            />
          </main>
        </ThemeProvider>
      </SWRConfig>
    </>
  );
}
