<script lang="ts">
    import type { PageData } from "./$types";
    import Sidebar from "../../components/Sidebar.svelte";
    import { PathNames, SingularSlugs } from "../../constants/pathNames.enum";
    import BeltTable from "../../components/BeltTable.svelte";
    import Posts from "../../components/Posts.svelte";

    export let data: PageData;
    $: hasTrainers = "trainers" in data;
</script>

{#if hasTrainers && data.trainers}
    <div class="grid grid-cols-2 gap-2">
        {#each data.trainers as x}
            <div class="card card-side bg-base-100 shadow-xl m-10">
                <figure>
                    <img class="w-40" src={x.picture} alt="Movie" />
                </figure>
                <div class="card-body">
                    <h2 class="card-title">{x.name}</h2>
                    <p>{x.bio}</p>
                </div>
            </div>
        {/each}
    </div>
{/if}

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
                    {@html data.mutatedMarkup}
                </div>
            {/if}
        </article>
    </div>
{/if}

{#if data.slug === PathNames.Belts}
    <article class="prose lg:prose-xl">
        <div>
            <BeltTable />
        </div>
    </article>
{/if}

{#if data.slug === PathNames.Posts}
    <Posts list={data} />
{/if}

{#if data.slug === PathNames.Competitions}
    <Posts list={data} />
{/if}
