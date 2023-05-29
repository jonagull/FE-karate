import { AUTH_TOKEN, BASE_URL } from "$lib/constants/variables";
import type { APIResponse } from "../../../interfaces";
import type { PageLoad } from "./$types";

export const load = (async ({ params }) => {
    const res = await fetch(
        `${BASE_URL}/api/galleries?filters[id][$eq]=${params.id}&populate=*`,
        {
            headers: {
                Authorization: `Bearer ${AUTH_TOKEN}`,
            },
        }
    );
    const response: APIResponse = await res.json();

    return {
        id: params.id,
        gallery: response.data[0],
    };
}) satisfies PageLoad;
