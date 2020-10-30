import 'styles/global.css';

import App from 'next/app';
import PropTypes from 'prop-types';
import { ThemeProvider } from 'styled-components';

import Layout from 'components/Layout.jsx';
import theme from 'public/static/theme';


const MyApp = ({ Component, pageProps }) => {
    return (
        <ThemeProvider theme={theme}>
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
