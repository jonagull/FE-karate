<script>
    import {
        Navbar,
        NavBrand,
        NavLi,
        NavUl,
        NavHamburger,
        Dropdown,
        DropdownItem,
        Chevron,
    } from "flowbite-svelte";
    import KarateMan from "$lib/assets/karateBoi.png";
    import { page } from "$app/stores";
</script>

<Navbar let:hidden let:toggle>
    <NavBrand href="/">
        <span
            class="self-center whitespace-nowrap text-xl font-semibold dark:text-white flex"
        >
            <img
                src={KarateMan}
                alt="Karate man kicking logo"
                style="height: 30px;"
            />
            <strong>Sentrum Karateklubb </strong>
        </span>
    </NavBrand>
    <NavHamburger on:click={toggle} />
    <NavUl {hidden}>
        <NavLi href="/" active={$page.url.pathname === "/"}>Fremsiden</NavLi>
        <NavLi href="/training" active={$page.url.pathname === "/training"}
            >Treningstider</NavLi
        >
        <NavLi href="/calendar" active={$page.url.pathname === "/calendar"}
            >Kalender</NavLi
        >
        <NavLi href="/posts" active={$page.url.pathname === "/posts"}
            >Nyheter</NavLi
        >
        <NavLi
            href="/competitions"
            active={$page.url.pathname === "/competitions"}>Resultater</NavLi
        >
        <NavLi href="/pics" active={$page.url.pathname === "/pics"}
            >Bildearkiv</NavLi
        >

        <NavLi id="nav-menu1" class="cursor-pointer"
            ><Chevron aligned>Karate</Chevron></NavLi
        >
        <Dropdown active={true} triggeredBy="#nav-menu1" class="w-44 z-20">
            <DropdownItem
                href="/rating"
                active={$page.url.pathname === "/rating"}
                >Gradering</DropdownItem
            >
            <DropdownItem href="/kihon" active={$page.url.pathname === "/kihon"}
                >Kihon/Kumite</DropdownItem
            >
            <DropdownItem href="/kata" active={$page.url.pathname === "/kata"}
                >Kata</DropdownItem
            >
            <DropdownItem
                href="/encyclopedia"
                active={$page.url.pathname === "/encyclopedia"}
                >Leksikon</DropdownItem
            >
        </Dropdown>

        <NavLi id="nav-menu2" class="cursor-pointer"
            ><Chevron aligned>Klubben</Chevron></NavLi
        >
        <Dropdown triggeredBy="#nav-menu2" class="w-44 z-20">
            <DropdownItem
                href="/sortebelter"
                active={$page.url.pathname === "/sortebelter"}
                >Sortbelter</DropdownItem
            >
            <DropdownItem
                href="/trainers"
                active={$page.url.pathname === "/trainers"}
                >Instruktører</DropdownItem
            >
            <DropdownItem
                href="/boardmember"
                active={$page.url.pathname === "/boardmember"}
                >Styret</DropdownItem
            >
        </Dropdown>

        <NavLi id="nav-menu3" class="cursor-pointer"
            ><Chevron aligned>Diverse</Chevron></NavLi
        >
        <Dropdown triggeredBy="#nav-menu3" class="w-44 z-20">
            <DropdownItem href="/links" active={$page.url.pathname === "/links"}
                >Linker</DropdownItem
            >
            <DropdownItem
                href="/history"
                active={$page.url.pathname === "/history"}
                >Historie</DropdownItem
            >
        </Dropdown>
    </NavUl>
</Navbar>
