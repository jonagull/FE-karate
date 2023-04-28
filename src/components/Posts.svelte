<script lang="ts">
    import { formatDate } from "../helpers/helpers";

    export let posts: Data[];
</script>

{#if posts}
    {#each posts as p}
        <div class="flex">
            <a href="/post/{p.id}"
                >{`${p.id} - ${p.attributes.title} - ${formatDate(
                    p.attributes.createdAt || ""
                )}`}</a
            >
        </div>
    {/each}
{/if}
