import { error } from "@sveltejs/kit";
import type { PageLoad } from "./$types";
import { PathNames, SingularSlugs } from "$lib/constants/pathNames.enum";
import { AUTH_TOKEN, BASE_URL } from "$lib/constants/variables";
let pageData: Lol;
let sideBarData: string[];
let mutatedMarkup: string;

export const load = (async ({ params }) => {
    if (SingularSlugs.includes(params.slug as PathNames)) {
        await fetchPageData(params.slug);
        return {
            title: pageData.data.attributes.title,
            content: mutatedMarkup,
            slug: params.slug,
            sideBar: sideBarData,
        };
    }

    if (params.slug === PathNames.Trainers) {
        await fetchPageData(params.slug, true);

        return {
            trainers: pageData.data,
            slug: params.slug,
        };
    }

    if (params.slug === PathNames.Belts) {
        // fetchPageData(params.slug);

        const lol = [
            {
                id: 1,
                attributes: {
                    name: "jonahtan",
                    dan: "3. Dan",
                    location: "Kopervik",
                    createdAt: "2023-04-29T21:39:59.497Z",
                    updatedAt: "2023-04-29T21:40:00.879Z",
                    publishedAt: "2023-04-29T21:40:00.877Z",
                },
            },
            {
                id: 2,
                attributes: {
                    name: "Lolatahn",
                    dan: "3. Dan",
                    location: "Kopervik",
                    createdAt: "2023-04-29T21:39:59.497Z",
                    updatedAt: "2023-04-29T21:40:00.879Z",
                    publishedAt: "2023-04-29T21:40:00.877Z",
                },
            },
            {
                id: 3,
                attributes: {
                    name: "Trenathan",
                    dan: "3. Dan",
                    location: "Kopervik",
                    createdAt: "2023-04-29T21:39:59.497Z",
                    updatedAt: "2023-04-29T21:40:00.879Z",
                    publishedAt: "2023-04-29T21:40:00.877Z",
                },
            },
        ];

        return {
            belts: lol,
            slug: params.slug,
        };
    }

    if (params.slug === PathNames.Posts) {
        await fetchPageData(params.slug);

        return {
            posts: pageData.data || [],
            slug: params.slug,
        };
    }

    if (params.slug === PathNames.Competitions) {
        await fetchPageData(params.slug);

        return {
            competitions: pageData.data,
            slug: params.slug,
        };
    }

    if (params.slug === PathNames.Links) {
        await fetchPageData(params.slug);

        return {
            links: pageData.data,
            slug: params.slug,
        };
    }

    if (params.slug === PathNames.Gallery) {
        await fetchPageData(params.slug, true);

        return {
            galleryData: pageData.data,
            slug: params.slug,
        };
    }

    throw error(404, "Not found");
}) satisfies PageLoad;

const fetchPageData = async (endpoint: string, withImgs = false) => {
    const res = await fetch(
        `${BASE_URL}/api/${endpoint}${withImgs ? "?populate=*" : ""}`,
        {
            headers: {
                Authorization: `Bearer ${AUTH_TOKEN}`,
            },
        }
    );
    pageData = await res.json();
    if (SingularSlugs.includes(endpoint as PathNames)) {
        htmlParser(pageData);
    }
};

const htmlParser = (pD: any): void => {
    const tempElement = document.createElement("div");
    const h3Elements = tempElement.getElementsByTagName("h3");

    tempElement.innerHTML = pD.data.attributes.text;

    for (let i = 0; i < h3Elements.length; i++) {
        const h3Text = h3Elements[i].textContent;

        h3Elements[i].setAttribute("id", h3Text || "failed");
    }

    mutatedMarkup = tempElement.innerHTML;
    sideBarData = Array.from(h3Elements).map((x) => x.innerText);
};
