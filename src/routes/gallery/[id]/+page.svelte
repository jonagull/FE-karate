<script lang="ts">
    import ProseWrapper from "$lib/components/ProseWrapper.svelte";
    import { BASE_URL } from "$lib/constants/variables";
    import type { PageData } from "./$types";
    import { Carousel } from "flowbite-svelte";

    export let data: PageData;

    let open = false;
    let selectedImageIndex: number;

    let imageArray = data.gallery.attributes.pics.data.map((x) => ({
        id: x.id,
        name: "lol",
        imageUrl: BASE_URL + x.attributes.url,
        attribution: "mark-harpur-K2s_YE031CA-unsplash",
    }));

    console.log(imageArray);

    const openImagePreviewer = (index: number): void => {
        console.log(imageArray.length);
        console.log(index);
        selectedImageIndex = index + 1;
        open = !open;
    };

    const nextImage = () => {
        if (imageArray.length === selectedImageIndex) {
            selectedImageIndex = 1;
            return;
        }

        selectedImageIndex += 1;
    };

    const previousImage = () => {
        if (imageArray.length === 0) {
            selectedImageIndex = imageArray.length;
            return;
        }

        selectedImageIndex -= 1;
    };
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
            {#each data.gallery.attributes.pics.data as pic, i}
                <div class="w-full rounded">
                    <!-- svelte-ignore a11y-click-events-have-key-events -->
                    <img
                        src={BASE_URL + pic.attributes.url}
                        alt=""
                        on:click={() => openImagePreviewer(i)}
                    />
                </div>
            {/each}
        {/if}
    </div>

    <button on:click={() => (open = !open)}>open me</button>
    <dialog data-modal {open}>
        <div class="carousel-container">
            <img
                src={imageArray.find((x) => x.id === selectedImageIndex)
                    ?.imageUrl}
                alt=""
            />
            <button on:click={() => (open = !open)}>Close</button>
            <button on:click={() => nextImage()}>Next</button>
            <button on:click={() => previousImage()}>Previous</button>
        </div>
    </dialog>
{/if}

<style>
    .carousel-container {
        border: 1px solid black;
        padding: 10px;
        height: auto;
        width: 60%;
        margin-right: auto;
        margin-left: auto;
    }
</style>
