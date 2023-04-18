<script lang="ts">
    import { fly, scale } from "svelte/transition";
    import { quadOut } from "svelte/easing";
    import { paths } from "./constants/paths";

    export let open: boolean;
</script>

{#if open}
    <div class="menu">
        <!-- {#each ["Home", "Example", "About", "Contact"] as link, i} -->
        {#each paths as path, i}
            <p transition:fly={{ y: -15, delay: 50 * i }}>
                <a href={path.path.toLowerCase()} style="text-decoration: none"
                    >{path.name}</a
                >
            </p>
        {/each}
    </div>

    <div
        class="bar"
        transition:scale={{ duration: 750, easing: quadOut, opacity: 1 }}
    />
{/if}

<style>
    .menu {
        text-align: center;
        font-size: 1.5em;
        letter-spacing: 0.15em;
        padding: 1em;
        padding-top: 0;
        color: #eef;
    }
    p {
        cursor: pointer;
        width: max-content;
        margin: 1rem auto;
    }
    p:hover {
        text-decoration: underline;
    }
    .bar {
        border-style: solid;
        border-color: white;
        border-width: 1px;
        height: 0;
    }
</style>
