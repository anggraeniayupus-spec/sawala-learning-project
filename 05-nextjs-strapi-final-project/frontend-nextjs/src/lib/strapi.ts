import axios from 'axios';

const STRAPI_URL = process.env.NEXT_PUBLIC_STRAPI_URL || 'http://localhost:1337';
const API_TOKEN = process.env.STRAPI_API_TOKEN;

export const strapiClient = axios.create({
  baseURL: `${STRAPI_URL}/api`,
  headers: {
    Authorization: API_TOKEN ? `Bearer ${API_TOKEN}` : '',
  },
});

export async function getArticles() {
  const { data } = await strapiClient.get('/articles');
  return data;
}

export async function getArticleBySlug(slug: string) {
  const { data } = await strapiClient.get(`/articles?slug=${slug}`);
  return data;
}
