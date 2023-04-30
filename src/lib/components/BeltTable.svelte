<script lang="ts">
    import { formatDate } from "$lib/helpers/helpers";

    export let belts: any;
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
                    <th>{b.attributes.location}</th>
                    <th>{formatDate(b.attributes.publishedAt)}</th>
                </tr>
            {/each}
        </tbody>
    </table>
</div>
