import { AUTH_TOKEN, BASE_URL } from "../constants/variables.js";

let pageData: any;

const fetchPageData = async (endpoint: string) => {
    const res = await fetch(`${BASE_URL}/api/${endpoint}`, {
        headers: {
            Authorization: `Bearer ${AUTH_TOKEN}`,
        },
    });
    pageData = await res.json();
};

export const load = async ({ params }) => {
    await fetchPageData("home");

    if (!pageData) {
        return;
    }

    return {
        title: pageData.data.attributes.title,
        content: pageData.data.attributes.text,
        pageData: pageData,
    };
};
