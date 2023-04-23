<script lang="ts">
    import type { PageData } from "./$types";
    import Sidebar from "../../components/Sidebar.svelte";

    export let data: PageData;
</script>

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

        {#if !data}
            <h1>Sorry mate</h1>
        {/if}
    </article>
</div>
