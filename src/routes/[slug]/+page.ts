import { error } from "@sveltejs/kit";
import type { PageLoad } from "./$types";

const AUTH_TOKEN =
    "29124405b793460a7f66c071d43288ead321941670adf3f22aa14c2eb6cf3a9a9aa44adc714e98e02d63ac52694f4b5c67a2e39cf047b91f1f45cfc8d4b1d55ab6517bf5cf607cedf765cc01502f76688b6f54aab5da9f90e7a76eb07ae8a0f9b12b9b46d74189392bc5765da2c2f4fcf0090c3c4823d1b7be85bfaffd3b4de9";
const BASE_URL = "http://localhost:1337";

let pageData: Lol;

const fetchPageData = async (endpoint: string) => {
    const res = await fetch(
        `${BASE_URL}/api/${endpoint === "/" ? "home" : endpoint}`,
        {
            headers: {
                Authorization: `Bearer ${AUTH_TOKEN}`,
            },
        }
    );
    pageData = await res.json();
};

export const load = (async ({ params }) => {
    if (params.slug === "/") {
        await fetchPageData("home");

        if (!pageData) {
            return;
        }

        return {
            title: pageData.data.attributes.title,
            content: pageData.data.attributes.text,
            pageData: pageData,
        };
    }

    if (params.slug === "articles") {
        await fetchPageData(params.slug);
        return {
            title: pageData.data.attributes.title,
            content: pageData.data.attributes.text,
            pageData: pageData,
        };
    }

    if (params.slug === "training") {
        await fetchPageData(params.slug);
        return {
            title: pageData.data.attributes.title,
            content: pageData.data.attributes.text,
            pageData: pageData,
        };
    }

    throw error(404, "Not found");
}) satisfies PageLoad;
