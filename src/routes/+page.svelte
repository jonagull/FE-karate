<script lang="ts">
    import Hero from "$lib/components/Hero.svelte";
    import { onMount } from "svelte";
    import type { PageData } from "./$types";
    import { fetchPageData } from "$lib/helpers/api";
    import ProseWrapper from "$lib/components/ProseWrapper.svelte";

    export let data: PageData;
    let hasLatestPosts: boolean;
    let latestPostLabel: string;

    onMount(async () => {
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

<Hero {hasLatestPosts} {latestPostLabel} heroData={data.heroData} />

{#if data.homeData}
    <ProseWrapper>
        <h1>{data.homeData.attributes.title}</h1>
        {@html data.homeData.attributes.text}
        <hr />
    </ProseWrapper>
{/if}

{#if hasLatestPosts}
    <ProseWrapper>
        <h1 id="siste">{latestPostLabel}</h1>
        {#each data.latestsPosts as p}
            <a class="font-medium hover:underline" href={`/post/${p.id}`}>
                <h2>{p.attributes.title}</h2>
            </a>
        {/each}
    </ProseWrapper>
{/if}
