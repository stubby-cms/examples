<template>
    <main class="container pb-40 pt-16 mx-auto max-w-[65ch]" v-if="status === 'success' && data">
        <nuxt-link to="/blog" class="text-blue-700 mb-10 inline-block">&larr; Back to blog</nuxt-link>
        <h1 class="text-3xl font-semibold">{{data.title}}</h1>
        <div class="prose">
            <MDC :value="data.content" tag="article" />
        </div>
    </main>
</template>

<script lang="ts" setup>
const route = useRoute()
const slug = route.params.slug

const { data, status, error, refresh, clear } = await useFetch('/api/a-page?slug=' + slug);

</script>