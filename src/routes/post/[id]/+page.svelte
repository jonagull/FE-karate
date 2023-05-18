<script lang="ts">
  import ProseWrapper from "$lib/components/ProseWrapper.svelte";
  import type { PageData } from "./$types";

  export let data: PageData;
</script>

{#if data}
  <ProseWrapper>
    <div>
      <h1>{data.post.attributes.title}</h1>
      {@html data.post.attributes.text}
    </div>
  </ProseWrapper>
{/if}
