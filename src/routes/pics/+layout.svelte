<script lang="ts">
    import Sidebar from "$lib/components/Sidebar.svelte";

    const isMobile = window.innerWidth < 620;

    let sideBarContent: any[] = [
        { name: "Egne konkurranser", link: "/pics/egne-konkurransers" },
        { name: "Egne samlinger", link: "/pics/bilder-egne-samlingers" },
        { name: "Klubben vår", link: "/pics/our-clubs" },
        { name: "Profiler/Historie", link: "/pics/profile-histories" },
        { name: "Turer/Konkurranser", link: "/pics/trips-competitions" },
        { name: "Turer/Samlinger", link: "/pics/trip-collections" },
        { name: "Filmer", link: "/pics/bilder-filmers" },
    ];
</script>

<div class={isMobile ? "" : "grid grid-cols-4 gap-4"}>
    {#if sideBarContent?.length}
        <div class="col-span-1">
            <Sidebar links={sideBarContent} routing />
        </div>
    {/if}
    <div class="col-span-3">
        <slot />
    </div>
</div>
