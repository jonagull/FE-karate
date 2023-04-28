<script lang="ts">
    import type { PageData } from "./$types";

    export let data: PageData;
</script>

{#if data}
    <article class="prose lg:prose-xl">
        <div>
            <h1>{data.post.attributes.title}</h1>
            {@html data.post.attributes.text}
        </div>
    </article>
{/if}
