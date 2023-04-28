<script lang="ts">
    import { formatDate } from "../helpers/helpers";

    export let list: any;

    $: hasPosts = "posts" in list;
</script>

{#if list}
    {#each hasPosts ? list.posts : list.competitions as p}
        <div class="flex">
            <a href={hasPosts ? `/post/${p.id}` : `/competition/${p.id}`}
                >{`${p.id} - ${p.attributes.title} - ${formatDate(
                    p.attributes.createdAt || ""
                )}`}</a
            >
        </div>
    {/each}
{/if}
