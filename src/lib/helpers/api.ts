import { AUTH_TOKEN, BASE_URL } from "$lib/constants/variables";

export const fetchPageData = async (endpoint: string) => {
    const res = await fetch(`${BASE_URL}/api/${endpoint}`, {
        headers: {
            Authorization: `Bearer ${AUTH_TOKEN}`,
        },
    });

    const response = await res.json();

    return response;
};
