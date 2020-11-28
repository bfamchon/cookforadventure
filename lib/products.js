import { getAllMarkdownMetaFromDirectory, getMarkdown, getPathsFor } from 'lib/markdown';

const format = file => ({
    ...file.metadata,
    content : file.content,
    link: `/adventure-products/${file.metadata.slug}`,
});

export const getAllProducts = () => getAllMarkdownMetaFromDirectory('adventure-products');

export const getAProduct = (slug) => format(getMarkdown(`adventure-products/${slug}.md`));

export const getAllPaths = () => getPathsFor('adventure-products')