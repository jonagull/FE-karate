<script lang="ts">
    import List from "$lib/components/List.svelte";
    import type { PageData } from "./$types";

    export let data: PageData;
</script>

<List slug={data.slug} listData={data.listData} />
