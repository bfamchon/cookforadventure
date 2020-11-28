import { getAllMarkdownMetaFromDirectory, getMarkdown, getPathsFor } from 'lib/markdown';

const format = file => ({
    ...file.metadata,
    content: file.content,
    link: `/adventures/${file.metadata.slug}`,
});

export const getAllAdventures = () => getAllMarkdownMetaFromDirectory('adventures');

export const getAnAdventure = (slug) => format(getMarkdown(`adventures/${slug}.md`));

export const getAllPaths = () => getPathsFor('adventures')