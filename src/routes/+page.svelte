<script lang="ts">
  import Hero from "$lib/components/Hero.svelte";
  import type { PageData } from "./$types";

  export let data: PageData;

  $: hasLatestPosts = "latestsPosts" in data && data.latestsPosts.length;
  $: latestPostLabel =
    data.latestsPosts.length > 1 ? "Siste nyheter" : "Siste nyhet";
</script>

<Hero {hasLatestPosts} {latestPostLabel} />

<!-- TODO: Ask customer if he wants this? -->
<!-- <article class="mb-40 prose">
    <h1>{data.title}</h1>
    {@html data.content}
</article> -->

{#if data.latestsPosts}
  <article class="prose">
    <h1 id="siste">{latestPostLabel}</h1>

    {#each data.latestsPosts as p}
      <div>
        <h2>{p.attributes.title}</h2>
        {@html p.attributes.text}
        <hr />
      </div>
    {/each}
  </article>
{/if}
