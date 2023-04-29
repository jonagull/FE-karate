<script lang="ts">
    import Hero from "$lib/components/Hero.svelte";
    import type { PageData } from "./$types";

    export let data: PageData;
</script>

<Hero />

<article class="prose lg:prose-xl">
    <h1>{data.title}</h1>
    {@html data.content}
</article>
