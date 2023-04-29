import { AUTH_TOKEN, BASE_URL } from "$lib/constants/variables";
import type { PageLoad } from "./$types";

export const load = (async ({ params }) => {
    const res = await fetch(
        `${BASE_URL}/api/posts?filters[id][$eq]=${params.id}`,
        {
            headers: {
                Authorization: `Bearer ${AUTH_TOKEN}`,
            },
        }
    );
    const response = await res.json();

    return {
        id: params.id,
        post: response.data[0],
    };
}) satisfies PageLoad;
