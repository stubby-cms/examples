import Markdown from "markdown-to-jsx";
import * as components from "@/app/components/content-components";
import { notFound } from "next/navigation";
import Link from "next/link";

const getData = async (slug: string) => {
  const siteId = process.env.STUBBY_SITE_ID;
  const url = new URL(`https://stubby.io/api/v1/sites/${siteId}/pages/${slug}`);
  url.searchParams.append("apiKey", process.env.STUBBY_API_KEY!);
  try {
    const res = await fetch(url.href, {
      next: { tags: [slug] },
    });
    const data = await res.json();
    return data;
  } catch (e) {
    return null;
  }
};

const BlogView = async ({ params }: any) => {
  const { slug } = params;
  const data = await getData(slug);
  if (!data) {
    notFound();
  }

  return (
    <div className="container mx-auto max-w-4xl pb-40 pt-16">
      <div className="max-w-prose mx-auto flex flex-col gap-4">
        <Link href="/blog" className="font-semibold uppercase no-underline">
          ◀︎ Back to blog
        </Link>
        <h1 className="text-3xl font-semibold">{data.title}</h1>
      </div>
      <article className="prose mx-auto mt-8">
        <Markdown options={{ overrides: components }}>{data.content}</Markdown>
      </article>
    </div>
  );
};

export default BlogView;
