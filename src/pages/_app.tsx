import "../styles/globals.css";
import type { AppProps } from "next/app";
import { ThemeProvider } from "next-themes";
import Header from "components/Header";
import Footer from "components/Footer";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider enableSystem attribute="class">
      <Header />
      <Component {...pageProps} />
      <Footer />
    </ThemeProvider>
  );
}
