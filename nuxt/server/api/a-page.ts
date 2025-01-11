export default defineEventHandler(async (event) => {
    const API_KEY = process.env.STUBBY_API_KEY;
    const SITE_ID = process.env.STUBBY_SITE_ID;
    const BASE_URL = process.env.STUBBY_BASE_URL;
    const {slug} = getQuery(event);

    const url = `${BASE_URL}/sites/${SITE_ID}/pages/${slug}?apiKey=${API_KEY}`;
    const res = await fetch(url);
    const data = await res.json();

    return data;
  })