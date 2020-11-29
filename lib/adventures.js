import { getAllMarkdownMetaFromDirectory, getMarkdown, getPathsFor } from 'lib/markdown';
import { byDate } from 'lib/utils';

const format = file => ({
    ...file.metadata,
    content: file.content,
    link: `/adventures/${file.metadata.slug}`,
});

export const getAllAdventures = () => getAllMarkdownMetaFromDirectory('adventures');

export const getAnAdventure = (slug) => format(getMarkdown(`adventures/${slug}.md`));

export const getAllPaths = () => getPathsFor('adventures');

export const getLatestAdventures = (n) => getAllAdventures().sort(byDate).slice(0, n);