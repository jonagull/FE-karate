<script lang="ts">
    import type { PageData } from "./$types";

    export let data: PageData;
</script>

<article class="prose lg:prose-xl">
    {#if data.sideBar}
        {#each data.sideBar as lol}
            <li>
                <a href={"#" + lol}>
                    {lol}
                </a>
            </li>
        {/each}
    {/if}

    {#if data}
        <h1>{data.title}</h1>
        {@html data.mutatedMarkup}
    {/if}

    {#if !data}
        <h1>Sorry mate</h1>
    {/if}
</article>
