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

    let isMobile = false;
    let hidden = isMobile;

    function toggle() {
        hidden = !hidden;
    }
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
        <NavLi href="/" active={true}>Fremsiden</NavLi>
        <NavLi href="/training" on:click={toggle}>Treningstider</NavLi>
        <NavLi href="/posts" on:click={toggle}>Nyheter</NavLi>
        <NavLi href="/competitions" on:click={toggle}>Resultater</NavLi>
        <NavLi href="/pics" on:click={toggle}>Bildearkiv</NavLi>

        <NavLi id="nav-menu1" class="cursor-pointer">
            <Chevron aligned>Karate</Chevron>
        </NavLi>
        <Dropdown triggeredBy="#nav-menu1" class="w-44 z-20">
            <DropdownItem href="/rating" on:click={toggle}
                >Gradering</DropdownItem
            >
            <DropdownItem href="/kihon" on:click={toggle}
                >Kihon/Kumite</DropdownItem
            >
            <DropdownItem href="/kata" on:click={toggle}>Kata</DropdownItem>
            <DropdownItem href="/encyclopedia" on:click={toggle}
                >Leksikon</DropdownItem
            >
        </Dropdown>

        <NavLi id="nav-menu2" class="cursor-pointer" on:click={toggle}>
            <Chevron aligned>Klubben</Chevron>
        </NavLi>
        <Dropdown triggeredBy="#nav-menu2" class="w-44 z-20">
            <DropdownItem href="/blackbelts" on:click={toggle}
                >Sortbelter</DropdownItem
            >
            <DropdownItem href="/trainers" on:click={toggle}
                >Instruktører</DropdownItem
            >
            <DropdownItem href="/boardmember" on:click={toggle}
                >Styret</DropdownItem
            >
        </Dropdown>

        <NavLi id="nav-menu3" class="cursor-pointer" on:click={toggle}>
            <Chevron aligned>Diverse</Chevron>
        </NavLi>
        <Dropdown triggeredBy="#nav-menu3" class="w-44 z-20">
            <DropdownItem href="/links" on:click={toggle}>Linker</DropdownItem>
            <!-- <DropdownItem href="/galleries">Bildegalleriet</DropdownItem> -->
            <DropdownItem href="/history" on:click={toggle}
                >Historie</DropdownItem
            >
        </Dropdown>
    </NavUl>
</Navbar>
