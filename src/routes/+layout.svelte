<script>
    import "../app.css";
    import { PathNames } from "../constants/pathNames.enum";
</script>

<nav class="flex px-4 border-b md:shadow-lg items-center relative">
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
        <li>
            <a
                href="/club"
                class="flex md:inline-flex p-4 items-center hover:bg-gray-50"
            >
                <span>Klubben</span>
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

<div class="flex flex-col items-center">
    <slot />
</div>

<!-- <nav>
    <a href={PathNames.Home}>Hjem</a>
    <a href={"/" + PathNames.Training}>Trening</a>
    <a href={"/" + PathNames.Club}>Klubben</a>
</nav> -->

<!-- component -->
<!-- <nav class="bg-white shadow dark:bg-gray-800">
    <div
        class="container flex items-center justify-center p-6 mx-auto text-gray-600 capitalize dark:text-gray-300"
    >
        <a
            href="/"
            class="text-gray-800 dark:text-gray-200 border-b-2 border-blue-500 mx-1.5 sm:mx-6"
            >Hjem</a
        >

        <a
            href={"/" + PathNames.Training}
            class="border-b-2 border-transparent hover:text-gray-800 dark:hover:text-gray-200 hover:border-blue-500 mx-1.5 sm:mx-6"
            >Trening</a
        >

        <a
            href={"/" + PathNames.Club}
            class="border-b-2 border-transparent hover:text-gray-800 dark:hover:text-gray-200 hover:border-blue-500 mx-1.5 sm:mx-6"
            >Klubben</a
        >

        <a
            href="/historie"
            class="border-b-2 border-transparent hover:text-gray-800 dark:hover:text-gray-200 hover:border-blue-500 mx-1.5 sm:mx-6"
            >Historie</a
        >

        <a
            href="/blog"
            class="border-b-2 border-transparent hover:text-gray-800 dark:hover:text-gray-200 hover:border-blue-500 mx-1.5 sm:mx-6"
            >Blog</a
        >
    </div>
</nav> -->

<!-- component -->
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
