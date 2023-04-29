<script lang="ts">
    import { BASE_URL } from "$lib/constants/variables";

    export let trainers: any;

    console.log("trainers", trainers);
</script>

<div class="grid grid-cols-2 gap-2">
    {#each trainers as x}
        <div class="card card-side bg-base-100 shadow-xl m-10">
            <figure>
                <img
                    class="w-40"
                    src={`${BASE_URL}${x.attributes.picture.data.attributes.url}`}
                    alt="avatar"
                />
            </figure>
            <div class="card-body">
                <h2 class="card-title">{x.attributes.name}</h2>
                <p>{@html x.attributes.text}</p>
            </div>
        </div>
    {/each}
</div>
