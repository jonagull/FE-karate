<script lang="ts">
    import { BASE_URL } from "$lib/constants/variables";

    export let hasLatestPosts: boolean;
    export let latestPostLabel: string;
    export let heroData: any;
</script>

{#if heroData}
    <div
        class="hero min-h-screen text-white"
        style={`background-image: url(${BASE_URL}${
            heroData && heroData.attributes.background.data[0].attributes.url
        })`}
    >
        <div class="hero-content flex-col lg:flex-row">
            <div>
                <h1 class="text-5xl font-bold">{heroData.attributes.title}</h1>
                <p class="py-6">
                    {heroData.attributes.text}
                </p>
                <a
                    class="btn btn-primary"
                    target="_blank"
                    href="https://medlemskap.nif.no/Start/Index/427950"
                    rel="noreferrer">Bli medlem!</a
                >

                {#if hasLatestPosts}
                    <a class=" btn btn-primary bg-transparent" href="#siste"
                        >{latestPostLabel}</a
                    >
                {/if}
            </div>
        </div>
    </div>
{/if}
