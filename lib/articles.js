import { getAllMarkdownMetaFromDirectory, getMarkdown, getPathsFor } from 'lib/markdown';

import {byDate} from 'lib/utils';

const format = (file, subject) => ({
    ...file.metadata,
    content: file.content,
    link: `/${subject}/${file.metadata.slug}`,
});

export const getAllArticlesAbout = subject => getAllMarkdownMetaFromDirectory(subject);

export const getAnArticle = (slug, subject) => format(getMarkdown(`${subject}/${slug}.md`), subject);

export const getAllPaths = (subject) => getPathsFor(subject);

export const getLatestArticles = (n, subject) => getAllArticlesAbout(subject).sort(byDate).slice(0,n);

export const getLatestPosts = (n) => {
    const adventures = getLatestArticles(3, 'recits-aventures').filter(a => !a.draft);
    const products = []; // getLatestArticles(3, 'tests-produits-sportifs').filter(a => !a.draft);
    const recipes = getLatestArticles(3, 'nutrition').filter(a => !a.draft);
    const articles = adventures.concat(products).concat(recipes);
    return articles.sort(byDate).slice(0,n);
}