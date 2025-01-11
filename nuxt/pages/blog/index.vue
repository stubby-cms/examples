<template>
    <main class="container pb-40 pt-16 mx-auto max-w-[65ch]">
        <h1 class="text-3xl font-semibold mb-10">Blog</h1>
        <ul class="flex flex-col space-y-10">
            <li v-for="page in data" :key="page.metadata.slug">
                <nuxt-link :to="`/blog/${page.metadata.slug}`" class="font-semibold text-lg">
                    {{ page.title }}
                </nuxt-link>
                <p>
                    {{ page.metadata.description }}
                </p>
                <NuxtLink :to="`/blog/${page.metadata.slug}`" class="mt-3 inline-block text-blue-700">
                    Read more &rarr;
                </NuxtLink>
            </li>
        </ul>
    </main>
</template>

<script lang="ts" setup>
const { data, status, error, refresh, clear } = await useFetch('/api/all-pages');
</script>