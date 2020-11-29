import { getAllMarkdownMetaFromDirectory, getMarkdown, getPathsFor } from 'lib/markdown';
import { byDate } from 'lib/utils';

const format = file => ({
    ...file.metadata,
    content: file.content,
    link: `/adventure-recipes/${file.metadata.slug}`,
});

export const getAllRecipes = () => getAllMarkdownMetaFromDirectory('adventure-recipes');

export const getARecipe = (slug) => format(getMarkdown(`adventure-recipes/${slug}.md`));

export const getAllPaths = () => getPathsFor('adventure-recipes');

export const getLatestRecipes = (n) => getAllRecipes().sort(byDate).slice(0,n);