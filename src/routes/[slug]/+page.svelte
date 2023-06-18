<script lang="ts">
    import type { PageData } from "./$types";
    import Sidebar from "../../lib/components/Sidebar.svelte";
    import List from "$lib/components/List.svelte";
    import TrainerCards from "$lib/components/TrainerCards.svelte";
    import Links from "$lib/components/Links.svelte";
    import { PathNames, SingularSlugs } from "$lib/constants/pathNames.enum";
    import ProseWrapper from "$lib/components/ProseWrapper.svelte";
    export let data: PageData;

    const isMobile = window.innerWidth < 620;

    $: inSingularSlugs = SingularSlugs.includes(data.slug as PathNames);
</script>

{#if inSingularSlugs}
    <div class={isMobile ? "" : "flex"}>
        <div>
            {#if data.sideBar?.length}
                <Sidebar links={data.sideBar} />
            {/if}
        </div>
        {#if data}
            <ProseWrapper>
                <div>
                    <h1>{data.title}</h1>
                    {@html data.content}
                </div>
            </ProseWrapper>
        {/if}
    </div>
{/if}

{#if data.slug === PathNames.Trainers}
    <TrainerCards trainers={data.trainers} />
{/if}

{#if data.slug === PathNames.Links}
    <Links links={data.links} />
{/if}

{#if data.slug === PathNames.Posts}
    <article class="prose mb-5">
        <h1>Nyhetsarkiv</h1>
    </article>
    <List slug={data.slug} />
{/if}

{#if data.slug === PathNames.Galleries}
    <article class="prose mb-5">
        <h1>Bildegalleriet</h1>
    </article>
    <List slug={data.slug} />
{/if}

{#if data.slug === PathNames.Competitions}
    <article class="prose mb-5">
        <h1>Resultater</h1>
    </article>
    <List slug={data.slug} />
{/if}
