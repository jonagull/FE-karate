<script lang="ts">
  import type { PageData } from "./$types";
  import Sidebar from "../../lib/components/Sidebar.svelte";
  import BeltTable from "../../lib/components/BeltTable.svelte";
  import List from "$lib/components/List.svelte";
  import TrainerCards from "$lib/components/TrainerCards.svelte";
  import Links from "$lib/components/Links.svelte";
  import Gallery from "$lib/components/Gallery.svelte";
  import { PathNames, SingularSlugs } from "$lib/constants/pathNames.enum";
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
    <article
      class={data.slug === PathNames.Boardmembers ||
      data.slug === PathNames.Training ||
      data.slug === PathNames.History
        ? "prose min-w-400"
        : "prose "}
    >
      {#if data}
        <div>
          <h1>{data.title}</h1>
          {@html data.content}
        </div>
      {/if}
    </article>
  </div>
{/if}

{#if data.slug === PathNames.Trainers}
  <TrainerCards trainers={data.trainers} />
{/if}

{#if data.slug === PathNames.Gallery}
  <Gallery galleryData={data.galleryData} />
{/if}

{#if data.slug === PathNames.Links}
  <Links links={data.links} />
{/if}

{#if data.slug === PathNames.Belts}
  <article class="prose">
    <div>
      <BeltTable belts={data.belts} />
    </div>
  </article>
{/if}

{#if data.slug === PathNames.Posts}
  <article class="prose mb-5">
    <h1>Nyhets arkiv</h1>
  </article>
  <List slug={data.slug} />
{/if}

{#if data.slug === PathNames.Competitions}
  <article class="prose mb-5">
    <h1>Konkurranser</h1>
  </article>
  <List slug={data.slug} />
{/if}
