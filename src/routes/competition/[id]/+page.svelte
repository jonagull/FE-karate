<script lang="ts">
    import type { PageData } from "./$types";

    export let data: PageData;
</script>

{#if data}
    <article class="prose">
        <div>
            <h1>{data.competition.attributes.title}</h1>
            {@html data.competition.attributes.text}
        </div>
    </article>
{/if}
