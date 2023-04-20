<script lang="ts">
    import type { PageData } from "./$types";

    export let data: PageData;
    console.log(data.content);
</script>

<article class="prose lg:prose-xl">
    <h1>{data.title}</h1>
    {@html data.content}
    <!-- <img
        src="http://localhost:1337/uploads/1681675815160407_f18b737437.jpg"
        alt="1681675815160407.jpg"
        width="500"
        height="625"
    /> -->
</article>
