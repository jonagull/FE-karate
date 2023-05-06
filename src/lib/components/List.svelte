<script lang="ts">
    import { AUTH_TOKEN, BASE_URL } from "$lib/constants/variables";
    import { formatDate } from "$lib/helpers/helpers";
    import { onMount } from "svelte";

    let listData: any;
    let hasData = false;
    export let slug: string;

    const fetchPageData = async (endpoint: string) => {
        const res = await fetch(`${BASE_URL}/api/${endpoint}`, {
            headers: {
                Authorization: `Bearer ${AUTH_TOKEN}`,
            },
        });
        listData = await res.json();
        if (listData.data.length) {
            hasData = true;
        }
    };

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
        if (listData.data.length) {
            hasData = true;
        }
    };

    onMount(async () => {
        fetchPageData(slug);
    });

    const hasPosts = slug === "posts";
</script>

{#if hasData}
    <div class="flex flex-col">
        {#each listData.data as p}
            <a
                class="container btn btn-white p-5"
                href={hasPosts ? `/post/${p.id}` : `/competition/${p.id}`}
                >{`${p.id} - ${p.attributes.title} - ${formatDate(
                    p.attributes.createdAt || ""
                )}`}</a
            >
        {/each}

        {#if listData.meta.pagination.pageCount > 1}
            <nav class="mt-5 flex flex-col items-center">
                <ul class="inline-flex -space-x-px">
                    <li>
                        <a
                            href="#"
                            on:click={() =>
                                paginationFetch(
                                    listData.meta.pagination.page - 1
                                )}
                            class="pag">Previous</a
                        >
                    </li>

                    {#each Array(listData.meta.pagination.pageCount) as _, i}
                        <li>
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
                        <a
                            href="#"
                            class="pag"
                            on:click={() =>
                                paginationFetch(
                                    listData.meta.pagination.page + 1
                                )}>Next</a
                        >
                    </li>
                </ul>
            </nav>
        {/if}
    </div>
{/if}

<style>
    .container {
        border-radius: 20px;
        display: flex;
        justify-content: center;
        width: auto;
        padding: 10px;
        margin: 5px;
    }

    .btn:link,
    .btn:hover {
        transform: translateY(-3px);
        box-shadow: 0 10px 20px rgba(0, 0, 0, 0.2);
    }

    .btn:active {
        transform: translateY(-1px);
        box-shadow: 0 5px 10px rgba(0, 0, 0, 0.2);
    }

    .btn-white {
        background-color: #fff;
        color: black;
        border: none;
    }

    .btn::after {
        content: "";
        display: inline-block;
        height: 100%;
        width: 100%;
        border-radius: 100px;
        position: absolute;
        top: 0;
        left: 0;
        z-index: -1;
        transition: all 0.4s;
    }

    .btn-white::after {
        background-color: #fff;
    }

    .btn:hover::after {
        transform: scaleX(1.4) scaleY(1.6);
        opacity: 0;
    }
</style>
