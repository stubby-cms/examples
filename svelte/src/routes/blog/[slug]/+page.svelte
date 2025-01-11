<script lang="ts">
  import SvelteMarkdown from "svelte-markdown";
  import type { PageData } from "./$types";

  let { data }: { data: PageData } = $props();

  function removeFrontmatter(content: string): string {
    const frontmatterPattern = /^---[\s\S]*?---\s*/;
    return content.replace(frontmatterPattern, "");
  }
</script>

<main class="container pb-40 pt-16 mx-auto max-w-[65ch]">
  <a href="/blog" class="text-blue-700 mb-10 inline-block"
    >&larr; Back to blog</a
  >
  <h1 class="text-3xl font-semibold mb-6">{data.post.title}</h1>
  <div class="prose">
    <SvelteMarkdown source={removeFrontmatter(data.post.content)} />
  </div>
</main>
