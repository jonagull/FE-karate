<script>
    import Footer from "$lib/components/Footer.svelte";
    import Navbar from "$lib/components/Navbar.svelte";
    import "../app.css";
</script>

<Navbar />

<div class="flex flex-col items-center pb-20">
    <slot />
</div>

<Footer />
