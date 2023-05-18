<script lang="ts">
  //   const isMobile = window.innerWidth < 620;
  const isMobile = true;
</script>

<footer
  class="fixed bottom-0 left-0 z-20 w-full p-4 bg-white border-t border-gray-200 shadow md:flex md:items-center md:justify-between md:p-6"
>
  {#if !isMobile}
    <span class="text-sm text-gray-500 sm:text-center"
      >© 2023 <a
        target="_blank"
        href="https://jonathangulliksen.no/"
        class="hover:underline"
        rel="noreferrer">Gulliksen Media™</a
      >
    </span>
  {/if}
  <ul
    class="flex flex-wrap items-center mt-3 text-sm font-medium text-gray-500 sm:mt-0"
  >
    <li>
      <a
        class="mr-4 hover:underline md:mr-6"
        target="_blank"
        href="https://medlemskap.nif.no/Start/Index/427950"
        rel="noreferrer">Bli medlem!</a
      >
    </li>
    <li>
      <!-- svelte-ignore a11y-missing-attribute -->
      <a class="mr-4 hover:underline md:mr-6">928 37 931</a>
    </li>
    <li>
      <!-- svelte-ignore a11y-missing-attribute -->

      <a
        href="https://www.google.com/maps/dir/59.7721088,5.1970048/sentrum+karate+kopervik/@59.5406774,4.7749346,9z/data=!3m1!4b1!4m9!4m8!1m1!4e1!1m5!1m1!1s0x463ba1ace5641235:0x567a2611b60e4e56!2m2!1d5.3043499!2d59.2840305"
        target="_blank"
        rel="noreferrer"
        class="mr-4 hover:underline md:mr-6">Havnegata 9, 4250 Kopervik</a
      >
    </li>
  </ul>
</footer>
