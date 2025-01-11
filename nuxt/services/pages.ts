const API_KEY = process.env.STUBBY_API_KEY;
const SITE_ID = process.env.STUBBY_SITE_ID;
const BASE_URL = "https://stubby.io/api/v1";

export const getAllPages = async () => {
  const url = `${BASE_URL}/sites/${SITE_ID}/folders?apiKey=${API_KEY}`;
  const res = await fetch(url);
  const data = await res.json();
  return data;
};

export const getPage = async (slug: string) => {
  const url = `${BASE_URL}/sites/${SITE_ID}/pages/${slug}?apiKey=${API_KEY}`;
  const res = await fetch(url);
  const data = await res.json();
  return data;
};
