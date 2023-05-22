<script lang="ts">
    import { AUTH_TOKEN, BASE_URL } from "$lib/constants/variables";
    import { formatDate } from "$lib/helpers/helpers";
    import { onMount } from "svelte";
    import {
        Table,
        TableBody,
        TableBodyCell,
        TableBodyRow,
        TableHead,
        TableHeadCell,
    } from "flowbite-svelte";
    import { fetchPageData } from "$lib/helpers/api";

    let listData: any;
    export let slug: string;

    const paginationFetch = async (page: any) => {
        if (page === 0 || page > listData.meta.pagination.pageCount) {
            return;
        }

        const res = await fetch(
            `${BASE_URL}/api/${
                hasPosts ? "posts" : "competitions"
            }?pagination[page]=${page}`,
            {
                headers: {
                    Authorization: `Bearer ${AUTH_TOKEN}`,
                },
            }
        );
        listData = await res.json();
    };

    onMount(async () => {
        listData = await fetchPageData(slug);
    });

    const hasPosts = slug === "posts";
</script>

{#if listData && listData.data && listData.data.length > 0}
    <div class="flex flex-col">
        <Table hoverable={true}>
            <TableHead>
                <TableHeadCell>Handling</TableHeadCell>
                <TableHeadCell>Tittel</TableHeadCell>
                <TableHeadCell>Dato</TableHeadCell>
            </TableHead>
            <TableBody>
                {#each listData.data as p}
                    <TableBodyRow>
                        <TableBodyCell>
                            <a
                                class="font-medium text-blue-600 hover:underline"
                                href={hasPosts
                                    ? `/post/${p.id}`
                                    : `/competition/${p.id}`}>Les</a
                            >
                        </TableBodyCell>
                        <TableBodyCell>{p.attributes.title}</TableBodyCell>
                        <TableBodyCell
                            >{formatDate(
                                p.attributes.createdAt || ""
                            )}</TableBodyCell
                        >
                    </TableBodyRow>
                {/each}
            </TableBody>
        </Table>

        {#if listData.meta.pagination.pageCount > 1}
            <nav class="mt-5 mb-20 flex flex-col items-center">
                <ul class="inline-flex -space-x-px">
                    <li>
                        <!-- svelte-ignore a11y-invalid-attribute -->
                        <a
                            href="#"
                            on:click={() =>
                                paginationFetch(
                                    listData.meta.pagination.page - 1
                                )}
                            class="pag">Tilbake</a
                        >
                    </li>
                    {#each Array(listData.meta.pagination.pageCount) as _, i}
                        <li>
                            <!-- svelte-ignore a11y-invalid-attribute -->
                            <a
                                href="#"
                                on:click={() => paginationFetch(i + 1)}
                                class={listData.meta.pagination.page === i + 1
                                    ? "current-pag"
                                    : "pag"}
                            >
                                {i + 1}
                            </a>
                        </li>
                    {/each}

                    <li>
                        <!-- svelte-ignore a11y-invalid-attribute -->
                        <a
                            href="#"
                            class="pag"
                            on:click={() =>
                                paginationFetch(
                                    listData.meta.pagination.page + 1
                                )}>Neste</a
                        >
                    </li>
                </ul>
            </nav>
        {/if}
    </div>
{/if}
