<script lang="ts">
    import { formatDate } from "$lib/helpers/helpers";

    export let list: any;

    $: hasPosts = "posts" in list;
</script>

{#if list}
    {#each hasPosts ? list.posts : list.competitions as p}
        <div class="flex">
            <a
                class="container"
                href={hasPosts ? `/post/${p.id}` : `/competition/${p.id}`}
                >{`${p.id} - ${p.attributes.title} - ${formatDate(
                    p.attributes.createdAt || ""
                )}`}</a
            >
        </div>
    {/each}
{/if}

<style>
    .container {
        border: solid 1px black;
        border-radius: 20px;
        display: flex;
        justify-content: center;
        width: auto;
        padding: 10px;
        margin: 5px;
    }

    .container:hover {
        background-color: grey;
    }
</style>
