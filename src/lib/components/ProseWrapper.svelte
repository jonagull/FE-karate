<script>
  import ForwardArrow from "$lib/assets/forward.png";
  import GoBackArrow from "$lib/assets/goBack.png";
</script>

<div class="flex">
  <div style="display: flex; align-items: flex-start; margin-top: 5%">
    <button style="width: 30px;" on:click={() => window.history.back()}>
      <img style="margin 0" src={GoBackArrow} alt="go back arrow" />
    </button>
  </div>
  <article class="container mx-auto px-4 sm:px-6 lg:px-8">
    <div
      class="prose mt-10 mb-10 sm:prose-sm md:prose-md lg:prose-lg xl:prose-xl mx-auto table-responsive"
    >
      <slot />
    </div>
  </article>
</div>

<style>
  button:hover {
    scale: 1.2;
  }
</style>
