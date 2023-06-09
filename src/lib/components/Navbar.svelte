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
    <NavLi href="/training">Treningstider</NavLi>
    <NavLi href="/posts">Nyheter</NavLi>
    <NavLi href="/competitions">Resultater</NavLi>

    <NavLi id="nav-menu1" class="cursor-pointer"
      ><Chevron aligned>Karate</Chevron></NavLi
    >
    <Dropdown triggeredBy="#nav-menu1" class="w-44 z-20">
      <DropdownItem href="/rating">Gradering</DropdownItem>
      <DropdownItem href="/kihon">Kihon/Kumite</DropdownItem>
      <DropdownItem href="/kata">Kata</DropdownItem>
      <DropdownItem href="/encyclopedia">Leksikon</DropdownItem>
    </Dropdown>

    <NavLi id="nav-menu2" class="cursor-pointer"
      ><Chevron aligned>Klubben</Chevron></NavLi
    >
    <Dropdown triggeredBy="#nav-menu2" class="w-44 z-20">
      <DropdownItem href="/blackbelts">Sortbelter</DropdownItem>
      <DropdownItem href="/trainers">Instruktører</DropdownItem>
      <DropdownItem href="/boardmember">Styret</DropdownItem>
    </Dropdown>

    <NavLi id="nav-menu3" class="cursor-pointer"
      ><Chevron aligned>Diverse</Chevron></NavLi
    >
    <Dropdown triggeredBy="#nav-menu3" class="w-44 z-20">
      <DropdownItem href="/links">Linker</DropdownItem>
      <DropdownItem href="/galleries">Bildegalleriet</DropdownItem>
      <DropdownItem href="/history">Historie</DropdownItem>
    </Dropdown>
  </NavUl>
</Navbar>
