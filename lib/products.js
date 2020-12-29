import { getAllMarkdownMetaFromDirectory, getMarkdown, getPathsFor } from 'lib/markdown';
import {byDate} from 'lib/utils';

const format = file => ({
    ...file.metadata,
    content : file.content,
    link: `/adventure-products/${file.metadata.slug}`,
});

export const getAllProducts = () => ([])//getAllMarkdownMetaFromDirectory('adventure-products');

export const getAProduct = (slug) => format(getMarkdown(`adventure-products/${slug}.md`));

export const getAllPaths = () => getPathsFor('adventure-products');

export const getLatestProducts = (n) => getAllProducts().sort(byDate).slice(0, n);