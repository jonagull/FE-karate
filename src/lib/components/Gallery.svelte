<script lang="ts">
    import { BASE_URL } from "$lib/constants/variables";

    export let galleryData: any;
</script>

<article class="prose lg:prose-xl">
    <h1>{galleryData.attributes.title}</h1>
    <div>
        {@html galleryData.attributes.text}
    </div>
</article>

<div class="container grid grid-cols-3 gap-2 mx-auto">
    {#each galleryData.attributes.image.data as img}
        <div class="w-full rounded">
            <a target="_blank" href={BASE_URL + img.attributes.url}>
                <img src={BASE_URL + img.attributes.url} alt="" />
            </a>
        </div>
    {/each}
</div>
