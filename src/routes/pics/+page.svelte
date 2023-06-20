<script lang="ts">
    import ProseWrapper from "$lib/components/ProseWrapper.svelte";
    import type { PageData } from "./$types";

    export let data: PageData;
</script>

<ProseWrapper>
    <div>
        <h1>Bildearkiv</h1>
        {@html data.pageData.data.attributes.text}
    </div>
</ProseWrapper>
