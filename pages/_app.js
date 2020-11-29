import 'styles/global.css';

import { DefaultSeo, SocialProfileJsonLd } from 'next-seo';
import SEO from 'next-seo.config';

import App from 'next/app';
import PropTypes from 'prop-types';
import { ThemeProvider } from 'styled-components';

import Layout from 'components/Layout.jsx';
import theme from 'public/static/theme';


const MyApp = ({ Component, pageProps }) => {
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
                ]}
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
