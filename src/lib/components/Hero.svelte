<script lang="ts">
    export let hasLatestPosts: boolean;
    export let latestPostLabel: string;
</script>

<div
    class="hero min-h-screen text-white"
    style="background-image: url(https://wallpaperaccess.com/full/19426.jpg)"
>
    <div class="hero-content flex-col lg:flex-row">
        <div>
            <h1 class="text-5xl font-bold">Sentrum karateklubb</h1>
            <p class="py-6">
                SKK etablert 1996 (etablerte Karmøy karateklubb 1982)
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
