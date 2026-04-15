import type { AppProps } from "next/app";
import Head from "next/head";
import "../styles/globals.css";

const App = ({ Component, pageProps }: AppProps) => {
  return (
    <>
      <Head>
        {/* Favicon com ícone de coração */}
        <link rel="icon" href="data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'><text y='75' font-size='79'>🤍</text></svg>" />
        <title>Momback Doces</title>
        
        {/* Google Analytics */}
        <script async src="https://www.googletagmanager.com/gtag/js?id=G-81LVHQV2Q3"></script>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-81LVHQV2Q3');
            `,
          }}
        />
      </Head>
      <Component {...pageProps} />
    </>
  );
};

export default App;
