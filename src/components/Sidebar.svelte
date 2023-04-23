<script lang="ts">
    export let links: string[] = [];
    // const result: string[] = [];
</script>

{#if links}
    <div class="sidebar__wrapper">
        {#each links as link}
            <li>
                <a href={"#" + link}>
                    {link}
                </a>
            </li>
        {/each}
    </div>
{/if}

<style>
    .sidebar__wrapper {
        position: sticky;
        padding: 10px;
        margin-right: 20px;
        top: 20px;
        text-decoration: none;
        border: solid 1px black;
        list-style-type: none;
        border-radius: 10px;
    }

    .sidebar__wrapper a {
        text-decoration: none;
    }
</style>
