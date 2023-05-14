<script lang="ts">
  export let hasLatestPosts: boolean;
</script>

<div class="hero min-h-screen">
  <div class="hero-content flex-col lg:flex-row">
    <div class="p-20">
      <img
        alt="hero"
        src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/5b/Karate_silhouette.svg/1200px-Karate_silhouette.svg.png"
        class="max-w-sm"
      />
    </div>
    <div>
      <h1 class="text-5xl font-bold">Sentrum karate</h1>
      <p class="pt-2">
        Velkommen til Sentrum karateklubb - Koperviks ledende karateklubb! Vi er
        en karateklubb med en stolt historie og et solid rykte for å utvikle
        dyktige og disiplinerte karateutøvere. Vår hovedinstruktør, Alf Ronny,
        har mange års erfaring og har produsert mange NM-medaljer.
      </p>

      <p class="py-6">
        Som medlem av Sentrum karateklubb vil du bli en del av et fellesskap av
        dedikerte og lidenskapelige karateutøvere. Vår klubb har et inkluderende
        miljø som er åpent for alle som ønsker å lære og vokse i Karate. Vi er
        stolte av å tilby et trygt og støttende treningsmiljø hvor du kan
        utvikle deg selv både fysisk og mentalt.
      </p>
      <a
        class="btn btn-primary"
        target="_blank"
        href="https://medlemskap.nif.no/Start/Index/427950"
        rel="noreferrer">Bli medlem!</a
      >

      {#if hasLatestPosts}
        <a class="text-black btn btn-primary bg-transparent" href="#siste"
          >Siste nyheter</a
        >
      {/if}
    </div>
  </div>
</div>
