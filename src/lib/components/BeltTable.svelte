<script lang="ts">
    import { formatDate } from "$lib/helpers/helpers";
    import type { BlackBeltsData } from "../../interfaces";
    import {
        Table,
        TableBody,
        TableBodyCell,
        TableBodyRow,
        TableHead,
        TableHeadCell,
    } from "flowbite-svelte";

    export let belts: BlackBeltsData[];
</script>

<h1>Sortbelter</h1>

<Table hoverable={true}>
    <TableHead>
        <TableHeadCell>Navn</TableHeadCell>
        <TableHeadCell>Dan</TableHeadCell>
        <TableHeadCell>Sted</TableHeadCell>
        <TableHeadCell>Dato</TableHeadCell>
    </TableHead>
    <TableBody>
        {#each belts as b}
            <TableBodyRow>
                <TableBodyCell>{b.attributes.name}</TableBodyCell>
                <TableBodyCell>{b.attributes.dan}</TableBodyCell>
                <TableBodyCell>{b.attributes.place}</TableBodyCell>
                <TableBodyCell
                    >{formatDate(b.attributes.createdAt || "")}</TableBodyCell
                >
            </TableBodyRow>
        {/each}
    </TableBody>
</Table>
