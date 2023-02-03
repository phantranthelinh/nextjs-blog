import "../styles/globals.css";
import type { AppProps } from "next/app";
import "../src/scss/style.scss";
import "../public/plugins/bootstrap/bootstrap.min.css"
export default function App({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}
