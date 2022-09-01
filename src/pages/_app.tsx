import type { AppProps } from "next/app";

import "../styles/globals.css";

export default function Cordhook({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}
