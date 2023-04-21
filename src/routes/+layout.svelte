<script>
    import "../app.css";
    import { PathNames } from "../constants/pathNames.enum";
    import ContactModal from "../components/ContactModal.svelte";

    let showModal = false;
</script>

<!-- <button on:click={() => (showModal = true)}> show modal </button> -->

<nav class="flex px-4 border-b md:shadow-lg items-center relative fixed top-0">
    <div class="text-lg font-bold md:py-0 py-4">Sentrum Karate</div>
    <ul
        class="md:px-2 ml-auto md:flex md:space-x-2 absolute md:relative top-full left-0 right-0"
    >
        <li>
            <a
                href="/"
                class="flex md:inline-flex p-4 items-center hover:bg-gray-50"
            >
                <span>Hjem</span>
            </a>
        </li>
        <li>
            <a
                href="/training"
                class="flex md:inline-flex p-4 items-center hover:bg-gray-50"
            >
                <span>Trening</span>
            </a>
        </li>
        <li>
            <a
                href="/club"
                class="flex md:inline-flex p-4 items-center hover:bg-gray-50"
            >
                <span>Klubben</span>
            </a>
        </li>
        <li class="relative parent">
            <a
                href="#"
                class="flex justify-between md:inline-flex p-4 items-center hover:bg-gray-50 space-x-2"
            >
                <span>Resultater</span>
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    class="w-4 h-4 fill-current pt-1"
                    viewBox="0 0 24 24"
                    ><path
                        d="M0 7.33l2.829-2.83 9.175 9.339 9.167-9.339 2.829 2.83-11.996 12.17z"
                    /></svg
                >
            </a>
            <ul
                class="child transition duration-300 md:absolute top-full right-0 md:w-48 bg-white md:shadow-lg md:rounded-b"
            >
                <li>
                    <a href="#" class="flex px-4 py-3 hover:bg-gray-50">
                        Svart belter
                    </a>
                </li>
                <li>
                    <a href="#" class="flex px-4 py-3 hover:bg-gray-50">
                        Konkurranser
                    </a>
                </li>
                <li>
                    <a href="#" class="flex px-4 py-3 hover:bg-gray-50">
                        Noe annet
                    </a>
                </li>
            </ul>
        </li>
        <li>
            <a
                href="#"
                class="flex md:inline-flex p-4 items-center hover:bg-gray-50"
            >
                <span>Trenere</span>
            </a>
        </li>
    </ul>
    <div class="ml-auto md:hidden text-gray-500 cursor-pointer">
        <svg
            xmlns="http://www.w3.org/2000/svg"
            class="w-5 h-5 fill-current"
            viewBox="0 0 24 24"
            ><path
                d="M24 20.188l-8.315-8.209 8.2-8.282-3.697-3.697-8.212 8.318-8.31-8.203-3.666 3.666 8.321 8.24-8.206 8.313 3.666 3.666 8.237-8.318 8.285 8.203z"
            /></svg
        >
    </div>
</nav>

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

<footer
    class="fixed bottom-0 left-0 z-20 w-full p-4 bg-white border-t border-gray-200 shadow md:flex md:items-center md:justify-between md:p-6"
>
    <span class="text-sm text-gray-500 sm:text-center"
        >© 2023 <a
            target="_blank"
            href="https://jonathangulliksen.no/"
            class="hover:underline"
            rel="noreferrer">Gulliksen Media™</a
        >
    </span>
    <ul
        class="flex flex-wrap items-center mt-3 text-sm font-medium text-gray-500 sm:mt-0"
    >
        <li>
            <a href="#" class="mr-4 hover:underline md:mr-6">Om oss</a>
        </li>
        <li>
            <a href="#" class="mr-4 hover:underline md:mr-6">94855321</a>
        </li>
        <li>
            <a href="#" class="mr-4 hover:underline md:mr-6"
                >Havnegata 9, 4250 Kopervik</a
            >
        </li>
        <li>
            <a
                href="#"
                on:click={() => (showModal = true)}
                class="hover:underline">Kontakt</a
            >
        </li>
    </ul>
</footer>

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
