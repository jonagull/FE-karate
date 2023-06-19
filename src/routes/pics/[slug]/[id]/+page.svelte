<script lang="ts">
    import ProseWrapper from "$lib/components/ProseWrapper.svelte";
    import { BASE_URL } from "$lib/constants/variables";
    import type { PageData } from "./$types";
    import ChevronRight from "$lib/assets/chevron_right.png";
    import ChevronCross from "$lib/assets/transparentX.png";
    import ChevronLeft from "$lib/assets/chevron_left.png";
    import { disableScrollHandling } from "$app/navigation";

    export let data: PageData;

    let selectedImageIndex: number;
    let dialog: any;

    let imageArray = data.gallery.attributes.pics.data.map((x) => ({
        id: x.id,
        name: "lol",
        imageUrl: BASE_URL + x.attributes.url,
        attribution: "mark-harpur-K2s_YE031CA-unsplash",
    }));

    const openImagePreviewer = (index: number): void => {
        selectedImageIndex = index;
        dialog.showModal();
    };

    const nextImage = () => {
        if (imageArray.length === selectedImageIndex + 1) {
            selectedImageIndex = 0;
            return;
        }
        selectedImageIndex += 1;
    };

    const previousImage = () => {
        if (selectedImageIndex === 0) {
            selectedImageIndex = imageArray.length - 1;
            return;
        }
        selectedImageIndex -= 1;
    };

    window.addEventListener("keydown", function (event): void {
        if (event.key === "ArrowRight") {
            nextImage();
        }

        if (event.key === "ArrowLeft") {
            previousImage();
        }
    });
</script>

{#if data}
    <div>
        <ProseWrapper>
            <div>
                <h1>{data.gallery.attributes.title}</h1>
                {@html data.gallery.attributes.text}
            </div>
        </ProseWrapper>

        <div class="container grid grid-cols-2 gap-2 mx-auto">
            {#if data.gallery.attributes.pics.data}
                {#each data.gallery.attributes.pics.data as pic, i}
                    <div class="w-full rounded">
                        <!-- svelte-ignore a11y-click-events-have-key-events -->
                        <img
                            src={BASE_URL + pic.attributes.url}
                            alt=""
                            style="max-width: 300px;"
                            on:click={() => openImagePreviewer(i)}
                        />
                    </div>
                {/each}
            {/if}
        </div>
    </div>

    <dialog bind:this={dialog} on:close>
        <button
            style="display: flex; justify-content: flex-end; width: 100%;"
            on:click={() => dialog.close()}
        >
            <img class="chevron" src={ChevronCross} alt="" />
        </button>

        <div class="action-container">
            <button class="chevron" on:click={() => previousImage()}>
                <img src={ChevronLeft} alt="" />
            </button>

            <!-- svelte-ignore a11y-click-events-have-key-events -->
            <img
                on:click={() => nextImage()}
                class="image-container"
                src={imageArray[selectedImageIndex]?.imageUrl}
                alt=""
            />

            <button class="chevron" on:click={() => nextImage()}>
                <img src={ChevronRight} alt="" /></button
            >
        </div>
    </dialog>
{/if}

<style>
    .image-container {
        width: 70%;
        display: flex;
        justify-content: center;
    }

    .image-container:hover {
        cursor: pointer;
    }

    .chevron {
        width: 40px;
    }

    .chevron:hover {
        scale: 1.2;
    }

    .action-container {
        display: flex;
        justify-content: center;
        backdrop-filter: blur(5px);
    }

    dialog::content {
        width: 80%;
        background: blur(5px);
    }

    dialog::backdrop {
        backdrop-filter: blur(5px);
    }
</style>
