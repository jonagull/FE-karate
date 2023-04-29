<script lang="ts">
    export let links: any;

    console.log(links);
</script>

<article class="prose lg:prose-xl">
    {#each links as link}
        <div>
            <a href={link.attributes.link}>{link.attributes.text}</a>
        </div>
    {/each}
</article>
