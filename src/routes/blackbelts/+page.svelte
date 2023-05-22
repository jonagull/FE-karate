<script lang="ts">
    import BeltTable from "$lib/components/BeltTable.svelte";
    import ProseWrapper from "$lib/components/ProseWrapper.svelte";
    import type { PageData } from "./$types";

    export let data: PageData;
</script>

<ProseWrapper>
    <BeltTable belts={data.blackbelts} />
</ProseWrapper>
