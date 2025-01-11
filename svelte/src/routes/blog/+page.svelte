<script lang="ts">
  import type { PageData } from "./$types";
  let { data }: { data: PageData } = $props();
</script>

<main class="container pb-40 pt-16 mx-auto max-w-[65ch]">
  <h1 class="text-3xl font-semibold mb-10">Blog</h1>
  <ul class="flex flex-col space-y-10">
    {#each data.posts as blog}
      <li>
        <a href={`blog/${blog.slug}`} class="font-semibold text-lg">
          {blog.title}
        </a>
        <p>
          {blog.metadata.description}
        </p>
        <a href={`blog/${blog.slug}`} class="mt-3 inline-block text-blue-700">
          Read more &rarr;
        </a>
      </li>
    {/each}
  </ul>
</main>
