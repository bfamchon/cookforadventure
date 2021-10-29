module.exports = {
    async redirects() {
        return [
          {
            source: '/adventures',
            destination: '/recits-aventures',
            permanent: true,
          },
          {
            source: '/adventures/:slug',
            destination: '/recits-aventures/:slug',
            permanent: true,
          },
          {
            source: '/adventure-products',
            destination: '/tests-produits-sportifs',
            permanent: true,
          },
        ]
      },
    webpack: (config, { isServer }) => {
        // Fixes npm packages that depend on `fs` module
        if (!isServer) {
          config.resolve.fallback.fs = false;
        } else {
            require('./scripts/sitemap');
        }

        return config
    }
}