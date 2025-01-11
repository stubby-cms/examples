import type { PageServerLoad } from "./$types";
import { env } from "$env/dynamic/private";

export const load: PageServerLoad = async ({ params }) => {
  const { STUBBY_API_KEY, STUBBY_SITE_ID, STUBBY_BASE_URL } = env;

  const url = `${STUBBY_BASE_URL}/sites/${STUBBY_SITE_ID}/pages/${params.slug}?apiKey=${STUBBY_API_KEY}`;

  const res = await fetch(url);
  const data = await res.json();

  return {
    post: data,
  };
};
