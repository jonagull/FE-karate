<script>
    import "../app.css";
    import { PathNames } from "../constants/pathNames.enum";
    import ContactModal from "../components/ContactModal.svelte";
    import Navbar from "../components/Navbar.svelte";
    import Footer from "../components/Footer.svelte";

    let showModal = false;
</script>

<Navbar />

<div class="flex flex-col items-center mt-5">
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

<style>
    @media only screen and (min-width: 768px) {
        .parent:hover .child {
            opacity: 1;
            height: auto;
            overflow: none;
            transform: translateY(0);
        }
        .child {
            opacity: 0;
            height: 0;
            overflow: hidden;
            transform: translateY(-10%);
        }
    }
</style>
