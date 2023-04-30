<script lang="ts">
    import type { PageData } from "./$types";
    import Sidebar from "../../lib/components/Sidebar.svelte";
    import BeltTable from "../../lib/components/BeltTable.svelte";
    import { PathNames, SingularSlugs } from "$lib/constants/pathNames.enum";
    import Posts from "$lib/components/Posts.svelte";
    import TrainerCards from "$lib/components/TrainerCards.svelte";
    import Links from "$lib/components/Links.svelte";
    import Gallery from "$lib/components/Gallery.svelte";

    export let data: PageData;
</script>

{#if SingularSlugs.includes(data.slug)}
    <div class="flex">
        <div>
            {#if data.sideBar}
                <Sidebar links={data.sideBar} />
            {/if}
        </div>
        <article class="prose lg:prose-xl">
            {#if data}
                <div>
                    <h1>{data.title}</h1>
                    {@html data.content}
                </div>
            {/if}
        </article>
    </div>
{/if}

{#if data.slug === PathNames.Trainers && data.trainers}
    <TrainerCards trainers={data.trainers} />
{/if}

{#if data.slug === PathNames.Gallery && data.galleryData}
    <Gallery galleryData={data.galleryData} />
{/if}

{#if data.slug === PathNames.Links && data.links}
    <Links links={data.links} />
{/if}

{#if data.slug === PathNames.Belts}
    <article class="prose lg:prose-xl">
        <div>
            <BeltTable belts={data.belts} />
        </div>
    </article>
{/if}

{#if data.slug === PathNames.Posts}
    <Posts list={data} />
{/if}

{#if data.slug === PathNames.Competitions}
    <Posts list={data} />
{/if}
