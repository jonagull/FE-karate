<script>
    import "../app.css";
    import ContactModal from "../lib/components/ContactModal.svelte";
    import Navbar from "../lib/components/Navbar.svelte";
    import Footer from "../lib/components/Footer.svelte";

    let showModal = false;
</script>

<Navbar />

<div class="p-20 flex flex-col items-center">
    <slot />
</div>

<ContactModal bind:showModal>
    <h2 slot="header">Kontakt informasjon</h2>

    <ol class="definition-list">
        <li>of or relating to modality in logic</li>
        <li>
            containing provisions as to the mode of procedure or the manner of
            taking effect —used of a contract or legacy
        </li>
        <li>of or relating to a musical mode</li>
        <li>of or relating to structure as opposed to substance</li>
        <li>
            of, relating to, or constituting a grammatical form or category
            characteristically indicating predication
        </li>
        <li>of or relating to a statistical mode</li>
    </ol>
</ContactModal>

<Footer />
