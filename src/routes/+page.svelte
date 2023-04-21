<script lang="ts">
    import type { PageData } from "./$types";

    export let data: PageData;
</script>

<article class="prose lg:prose-xl">
    <h1>{data.title}</h1>
    {@html data.content}
</article>

<div class="hero-section__wrapper">
    <button
        class="bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow"
    >
        <a
            target="_blank"
            href="https://medlemskap.nif.no/Start/Index/427950"
            rel="noreferrer">Bli med!</a
        >
    </button>
</div>
