import { fetchPageData } from "$lib/helpers/api";
import type { PageLoad } from "./$types";

export const load = (async ({ params }) => {
    const listData = await fetchPageData(params.slug);

    return {
        slug: params.slug,
        listData: listData,
    };
}) satisfies PageLoad;
