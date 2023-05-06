<script lang="ts">
    import type { PageData } from "./$types";

    export let data: PageData;
</script>

{#if data}
    <article class="prose mt-20">
        <div>
            <h1>{data.post.attributes.title}</h1>
            {@html data.post.attributes.text}
        </div>
    </article>
{/if}
