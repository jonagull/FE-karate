<div class="container mx-auto px-4 sm:px-6 lg:px-8">
  <div
    class="prose sm:prose sm:prose-sm md:prose-md lg:prose-lg xl:prose-xl mx-auto"
  >
    <slot />
  </div>
</div>

<!-- <article
      class={data.slug === PathNames.Boardmembers ||
      data.slug === PathNames.Training ||
      data.slug === PathNames.History
        ? "prose min-w-400"
        : "prose "}
    >
      {#if data}
        <div>
          <h1>{data.title}</h1>
          {@html data.content}
        </div>
      {/if}
    </article> -->
