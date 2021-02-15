const fs = require('fs');
const globby = require('globby');
const { url } = require('inspector');

const getPriority = (url) => {
  const splitedURLLength = url.split('/').length
  switch (splitedURLLength) {
    case 3:
      return 1.00;
    case 4:
      return 0.80;
    case 5:
      return 0.70;
  }
}

const generateSiteMap = async () => {
  const pages = await globby([
    'pages/**/*.js',
    '!pages/_*.js',
    '!pages/**/[slug].js',
    '!pages/api',
    'contents/**/*.md',
  ]);
  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
    <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xsi:schemaLocation="http://www.sitemaps.org/schemas/sitemap/0.9 http://www.sitemaps.org/schemas/sitemap/0.9/sitemap.xsd">
      ${pages
        .map(page => {
          const path = page
            .replace('pages', '')
            .replace('contents', '')
            .replace('.js', '')
            .replace('.md', '')
            .replace('/index', '');
          let urlLoc = `https://cookforadventure.com${path}`;
          if (urlLoc.charAt(urlLoc.length - 1) === '/') {
            urlLoc.slice(0, -1);
          }
          return `<url>
            <loc>${urlLoc}</loc>
            <priority>${getPriority(urlLoc)}</priority>
          </url>
          `;
        })
        .join('')}
      </urlset>
  `;

  fs.writeFileSync('public/sitemap.xml', sitemap);
  console.log('sitemap.xml generated in public directory !');
};

generateSiteMap();
