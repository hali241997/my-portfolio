import Footer from "components/Footer";
import type { AppProps } from "next/app";
import "../styles/globals.css";
import Head from "next/head";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Hasnain Ali - Providing Full-Stack Development Services</title>
        <meta
          name="description"
          content="Providing Full-Stack Development Services"
        />

        {/* OG */}
        <meta
          property="og:title"
          content="Hasnain Ali - Providing Full-Stack Development Services"
        />
        <meta
          property="og:description"
          content="Providing Full-Stack Development Services"
        />
        <meta property="og:image" content="/metadata-image.png" />

        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="Hasnain Ali - Providing Full-Stack Development Services"
        />
        <meta
          name="twitter:description"
          content="Providing Full-Stack Development Services"
        />
        <meta name="twitter:image" content="/metadata-image.png" />

        <link rel="canonical" href="https://hasnainali.dev/" />

        <meta name="viewport" content="width=device-width, initial-scale=1" />

        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon-16x16.png"
        />
        <link rel="manifest" href="/site.webmanifest" />
        <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#5bbad5" />
        <meta name="msapplication-TileColor" content="#da532c" />
        <meta name="theme-color" content="#ffffff" />
      </Head>
      <Component {...pageProps} />
      <Footer />
    </>
  );
}
