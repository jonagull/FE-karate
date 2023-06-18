<script lang="ts">
    import Sidebar from "$lib/components/Sidebar.svelte";

    const isMobile = window.innerWidth < 620;

    let sideBarContent: any[] = [
        { name: "Egne samlinger", link: "/pics/bilder-egne-samlingers" },
        { name: "Klubben vår", link: "/pics/our-clubs" },
        { name: "Profiler/Historie", link: "/pics/profile-histories" },
        { name: "Turer/Konkurranser", link: "/pics/trips-competitions" },
        { name: "Turer/Samlinger", link: "/pics/trip-collections" },
    ];
</script>

<div class={isMobile ? "" : "flex"}>
    <div>
        {#if sideBarContent?.length}
            <Sidebar links={sideBarContent} routing />
        {/if}
    </div>
    <slot />
</div>
