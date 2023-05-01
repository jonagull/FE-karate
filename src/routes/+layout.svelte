<script>
    import "../app.css";
    import Navbar from "../lib/components/Navbar.svelte";
    import Footer from "../lib/components/Footer.svelte";
</script>

<Navbar />

<div class="flex flex-col items-center">
    <slot />
</div>

<Footer />
