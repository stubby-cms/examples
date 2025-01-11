import Link from "next/link";

// Fetch data from the server
const getData = async () => {
  const siteId = process.env.STUBBY_SITE_ID;
  const url = new URL(`https://stubby.io/api/v1/sites/${siteId}/folders`);
  url.searchParams.append("apiKey", process.env.STUBBY_API_KEY!);
  const res = await fetch(url.href, {
    cache: "force-cache",
    next: { tags: ["posts"] },
  });
  const data = await res.json();
  return data;
};

const BlogListPage = async () => {
  const data = await getData();

  return (
    <main className="container mx-auto max-w-4xl pb-40 pt-16">
      <h1 className="font-semibold text-3xl mb-3">Blog</h1>
      <ul className="list-none p-0 gap-10 flex flex-col">
        {data.map((blog: any) => {
          return (
            <li key={blog.metadata.slug}>
              <Link
                href={`/blog/${blog.metadata.slug}`}
                className="text-xl font-medium"
              >
                {blog.title}
              </Link>
              <p className="text-gray-500">{blog.metadata.description}</p>

              <Link href={`/blog/${blog.metadata.slug}`}>Read more &rarr;</Link>
            </li>
          );
        })}
      </ul>
    </main>
  );
};

export default BlogListPage;
