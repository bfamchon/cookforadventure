import { getLatestAdventures } from 'lib/adventures';
import { getLatestProducts } from 'lib/products';
import { getLatestRecipes } from 'lib/recipes';
import {byDate} from 'lib/utils';

export const getLatestPosts = (n) => {
    const adventures = getLatestAdventures(3);
    const products = getLatestProducts(3);
    const recipes = getLatestRecipes(3);
    const articles = adventures.concat(products).concat(recipes);
    return articles.sort(byDate).slice(0,n);
}