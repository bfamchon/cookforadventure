import 'styles/global.css';

import { BlogJsonLd, DefaultSeo, LogoJsonLd, SocialProfileJsonLd } from 'next-seo';
import SEO from 'next-seo.config';

import App from 'next/app';
import PropTypes from 'prop-types';
import { ThemeProvider } from 'styled-components';

import Layout from 'components/Layout.jsx';
import theme from 'public/static/theme';

import { useRouter } from "next/router";
import { useEffect, useCallback } from "react";
import * as gtag from "../lib/gtag";
const isProduction = process.env.NODE_ENV === "production";


const MyApp = ({ Component, pageProps }) => {
    const router = useRouter();

    const handleRouteChange = useCallback(url => {
        /* invoke analytics function only for production */
        if (isProduction) gtag.pageview(url);
      }, []);

  useEffect(() => {
    router.events.on("routeChangeComplete", handleRouteChange);
    return () => {
      router.events.off("routeChangeComplete", handleRouteChange);
    };
  }, [router.events]);

  useEffect(() => {
    if("serviceWorker" in navigator) {
      window.addEventListener("load", function () {
       navigator.serviceWorker.register("/sw.js").then(
          function (registration) {
            console.log("Service Worker registration successful with scope: ", registration.scope);
          },
          function (err) {
            console.log("Service Worker registration failed: ", err);
          }
        );
      });
    }
  }, []);

    return (
        <ThemeProvider theme={theme}>
            <DefaultSeo {...SEO} />
            <SocialProfileJsonLd
                type="Organization"
                name="Cook For adventure"
                url="https://cookforadventure.com"
                sameAs={[
                    'https://www.strava.com/athletes/25128286',
                    'https://www.instagram.com/bfamchon',
                    'https://www.facebook.com/cookforadventure/',
                    'https://www.pinterest.fr/baptistefamchon',
                    'https://fr.linkedin.com/in/baptiste-famchon-629433111',
                ]}
            />
            <BlogJsonLd
                url="https://cookforadventure.com"
                title="Toute la nutrition pour les sportifs | Cook For Adventure"
                images={[
                    'https://cookforadventure.com/static/images/seo-miniature.webp',
                ]}
                dateModified={new Date().toISOString()}
                authorName="Baptiste"
                description="Conseils en nutrition et alimentation de l'effort. Sur Cook For Adventure, retrouvez les meilleures recettes et conseils dédiés aux sportifs !"
            />
            <LogoJsonLd
                logo="https://cookforadventure.com/static/images/logo-cfa.png"
                url="https://cookforadventure.com"
            />
            <Layout>
                <Component {...pageProps} />
            </Layout>
        </ThemeProvider>
    );
};

MyApp.propTypes = {
    Component: PropTypes.any,
    pageProps: PropTypes.shape(),
};

MyApp.getInitialProps = async appContext => ({
    ...(await App.getInitialProps(appContext)),
});

export default MyApp;
