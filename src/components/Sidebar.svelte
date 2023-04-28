<script lang="ts">
    export let links: string[] = [];
</script>

{#if links}
    <div class="sidebar__wrapper">
        {#each links as link}
            <li>
                <a class="hover-underline-animation" href={"#" + link}>
                    {link}
                </a>
            </li>
        {/each}
    </div>
{/if}

<style>
    .sidebar__wrapper {
        position: sticky;
        padding: 20px;
        margin-right: 20px;
        top: 20px;
        text-decoration: none;
        border: solid 1px grey;
        list-style-type: none;
        border-radius: 10px;
    }

    .sidebar__wrapper a {
        text-decoration: none;
    }

    .hover-underline-animation {
        display: inline-block;
        position: relative;
        color: black;
    }

    .hover-underline-animation::after {
        content: "";
        position: absolute;
        width: 100%;
        transform: scaleX(0);
        height: 2px;
        bottom: 0;
        left: 0;
        background-color: black;
        transform-origin: bottom right;
        transition: transform 0.25s ease-out;
    }

    .hover-underline-animation:hover::after {
        transform: scaleX(1);
        transform-origin: bottom left;
    }
</style>
