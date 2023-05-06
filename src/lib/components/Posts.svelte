<script lang="ts">
    import { formatDate } from "$lib/helpers/helpers";

    export let list: any;

    $: hasPosts = "posts" in list;
</script>

{#if list}
    <div class="flex flex-col">
        {#each hasPosts ? list.posts : list.competitions as p}
            <a
                class="container btn btn-white p-5"
                href={hasPosts ? `/post/${p.id}` : `/competition/${p.id}`}
                >{`${p.attributes.title} - ${formatDate(
                    p.attributes.createdAt || ""
                )}`}</a
            >
        {/each}

        <nav class="mt-5 flex flex-col items-center">
            <ul class="inline-flex -space-x-px">
                <li>
                    <a href="#" class="pag">Previous</a>
                </li>
                <li>
                    <a href="#" class="pag">1</a>
                </li>
                <li>
                    <a href="#" class="pag">2</a>
                </li>
                <li>
                    <a href="#" aria-current="page" class="pag">3</a>
                </li>
                <li>
                    <a href="#" class="pag">4</a>
                </li>
                <li>
                    <a href="#" class="pag">5</a>
                </li>
                <li>
                    <a href="#" class="pag">Next</a>
                </li>
            </ul>
        </nav>
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
