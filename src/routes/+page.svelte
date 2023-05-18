<script lang="ts">
    import Hero from "$lib/components/Hero.svelte";
    import { onMount } from "svelte";
    import type { PageData } from "./$types";

    export let data: PageData;
    let hasLatestPosts = false;
    let latestPostLabel: string;

    onMount(() => {
        if (data.latestsPosts) {
            if (data.latestsPosts.length) {
                hasLatestPosts = true;

                latestPostLabel =
                    data.latestsPosts.length > 1
                        ? "Siste nyheter"
                        : "Siste nyhet";
            }
        }
    });
</script>

<Hero {hasLatestPosts} {latestPostLabel} />

{#if hasLatestPosts}
    <article class="prose">
        <h1 id="siste">{latestPostLabel}</h1>

        {#each data.latestsPosts as p}
            <div>
                <h2>{p.attributes.title}</h2>
                {@html p.attributes.text}
                <hr />
            </div>
        {/each}
    </article>
{/if}
