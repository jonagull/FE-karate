<script lang="ts">
    import { AUTH_TOKEN, BASE_URL } from "$lib/constants/variables";
    import { formatDate } from "$lib/helpers/helpers";
    import { onMount } from "svelte";

    let belts: any;
    let hasData = false;
    export let slug: string;

    const fetchPageData = async (endpoint: string) => {
        const res = await fetch(`${BASE_URL}/api/${endpoint}`, {
            headers: {
                Authorization: `Bearer ${AUTH_TOKEN}`,
            },
        });
        belts = await res.json();

        if (belts.data.length) {
            hasData = true;
        }
    };

    onMount(async () => {
        fetchPageData(slug);
    });
</script>

<h1>Sortbelter</h1>

<div class="overflow-x-auto">
    <table class="table table-compact w-full">
        <thead>
            <tr>
                <th />
                <th>Navn</th>
                <th>Dan</th>
                <th>Sted</th>
                <th>Dato</th>
            </tr>
        </thead>
        <tbody>
            {#each belts as b}
                <tr>
                    <th>{b.id}</th>
                    <th>{b.attributes.name}</th>
                    <th>{b.attributes.dan}</th>
                    <th>{b.attributes.place}</th>
                    <th
                        >{b.attributes.date ||
                            formatDate(b.attributes.publishedAt)}</th
                    >
                </tr>
            {/each}
        </tbody>
    </table>
</div>
