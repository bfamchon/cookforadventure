import { getAllMarkdownMetaFromDirectory, getMarkdown, getPathsFor } from 'lib/markdown';
import { byDate } from 'lib/utils';

const format = file => ({
    ...file.metadata,
    content: file.content,
    link: `/nutrition/${file.metadata.slug}`,
});

export const getAllRecipes = () => getAllMarkdownMetaFromDirectory('nutrition');

export const getARecipe = (slug) => format(getMarkdown(`nutrition/${slug}.md`));

export const getAllPaths = () => getPathsFor('nutrition');

export const getLatestRecipes = (n) => getAllRecipes().sort(byDate).slice(0,n);