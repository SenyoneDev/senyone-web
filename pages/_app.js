import { Seo } from "../components";
import DefaultHeader from "../components/header/default";
import Footer from "../components/footer";
import "../styles/globals.css";
import { ApolloProvider } from "@apollo/client";
import apolloClient from "../configs/apollo-client";
import Script from "next/script";
import Maintenance from "../components/sections/maintenance";

function MyApp({ Component, pageProps }) {
  return (
    <ApolloProvider client={apolloClient}>
      {/* <DefaultHeader />
      <Seo /> */}
      <main>
        {/* Global site tag (gtag.js) - Google Analytics */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-GN7ZYBXT41"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){window.dataLayer.push(arguments);}
          gtag('js', new Date());

          gtag('config', 'G-GN7ZYBXT41');
        `}
        </Script>
        {/* <Component {...pageProps} /> */}
        <Maintenance/>
      </main>
      <Footer />
    </ApolloProvider>
  );
}

export default MyApp;
