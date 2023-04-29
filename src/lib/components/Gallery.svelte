<script lang="ts">
    import { BASE_URL } from "$lib/constants/variables";
    import { attr } from "svelte/internal";

    export let galleryData: any;

    console.log("inside", galleryData);
</script>

<article class="prose lg:prose-xl">
    <h1>{galleryData.attributes.title}</h1>
    <div>
        {@html galleryData.attributes.text}
    </div>
</article>

{#each galleryData.attributes.image.data as img}
    <img src={BASE_URL + img.attributes.url} alt="" />
{/each}
