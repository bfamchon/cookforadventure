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
                ]}
            />
            <BlogJsonLd
                url="https://cookforadventure.com"
                title="Cook For Adventure"
                images={[
                    'https://cookforadventure.com/static/images/seo-miniature.webp',
                ]}
                datePublished={new Date().toISOString()}
                dateModified={new Date().toISOString()}
                authorName="Baptiste"
                description="Conseils nutrition et alimenation de l'effort."
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
