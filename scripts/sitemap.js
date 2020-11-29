const fs = require('fs');
const globby = require('globby');

const generateSiteMap = async () => {
  const pages = await globby([
    'pages/**/*.js',
    '!pages/_*.js',
    '!pages/**/[slug].js',
    '!pages/api',
    'contents/**/*.md',
  ]);
  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
    <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
      ${pages
        .map(page => {
          const path = page
            .replace('pages', '')
            .replace('contents', '')
            .replace('.js', '')
            .replace('.md', '')
            .replace('/index', '');
          return `<url>
            <loc>https://cookforadventure.com${path}</loc>
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
