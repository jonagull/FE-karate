<script lang="ts">
    import type { PageData } from "./$types";

    export let data: PageData;
</script>

<h1>{data.title}</h1>

<article class="prose lg:prose-xl">
    {data.content}
</article>
