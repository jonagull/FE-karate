<script lang="ts">
    export let links: any;
</script>

<article class="prose lg:prose-xl">
    {#each links as link}
        <div>
            <a target="_blank" href={link.attributes.link}
                >{link.attributes.text}</a
            >
        </div>
    {/each}
</article>
