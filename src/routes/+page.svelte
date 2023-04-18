<script lang="ts">
    import { Hamburger } from "svelte-hamburgers";
    import Menu from "../Menu.svelte";

    let open: boolean;
</script>

<Hamburger bind:open --color="white" />

<Menu bind:open />

<h1>welcojme to karate</h1>
