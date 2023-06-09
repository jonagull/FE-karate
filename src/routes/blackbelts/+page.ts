import type { PageLoad } from "./$types";
import { fetchPageData } from "$lib/helpers/api";
import { PathNames } from "$lib/constants/pathNames.enum";
import type { BlackBeltsResponse } from "../../interfaces";

export const load = (async () => {
    const response: BlackBeltsResponse = await fetchPageData(
        PathNames.Blackbelts + "?_limit=-1"
    );

    return {
        blackbelts: response.data,
    };
}) satisfies PageLoad;
