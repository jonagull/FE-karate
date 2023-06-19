import { fetchPageData } from "$lib/helpers/api";
import type { PageLoad } from "./$types";

export const load = (async () => {
    const pageData = await fetchPageData("pic");

    return {
        pageData: pageData,
    };
}) satisfies PageLoad;
