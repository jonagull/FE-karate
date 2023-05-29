<script lang="ts">
    import ProseWrapper from "$lib/components/ProseWrapper.svelte";
    import { BASE_URL } from "$lib/constants/variables";
    import type { PageData } from "./$types";

    export let data: PageData;
</script>

{#if data}
    <ProseWrapper>
        <div>
            <h1>{data.gallery.attributes.title}</h1>
            {@html data.gallery.attributes.text}
        </div>
    </ProseWrapper>

    <div class="container grid grid-cols-3 gap-2 mx-auto">
        {#if data.gallery.attributes.pics.data}
            {#each data.gallery.attributes.pics.data as pic}
                <div class="w-full rounded">
                    <a target="_blank" href={BASE_URL + pic.attributes.url}>
                        <img src={BASE_URL + pic.attributes.url} alt="" />
                    </a>
                </div>
            {/each}
        {/if}
    </div>
{/if}
