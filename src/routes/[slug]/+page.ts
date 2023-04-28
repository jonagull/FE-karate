import { error } from "@sveltejs/kit";
import type { PageLoad } from "./$types";
import { PathNames } from "../../constants/pathNames.enum";
import { AUTH_TOKEN, BASE_URL } from "../../constants/variables";

let pageData: Lol;
let sideBarData: string[];
let mutatedMarkup: string;

export const load = (async ({ params }) => {
    if (params.slug === PathNames.Club) {
        await fetchPageData(params.slug);
        return {
            title: pageData.data.attributes.title,
            content: pageData.data.attributes.text,
            mutatedMarkup: mutatedMarkup,
            pageData: pageData,
            path: params.slug,
            sideBar: sideBarData,
        };
    }

    if (params.slug === PathNames.Training) {
        await fetchPageData(params.slug);

        return {
            title: pageData.data.attributes.title,
            content: pageData.data.attributes.text,
            mutatedMarkup: mutatedMarkup,
            pageData: pageData,
            path: params.slug,
            sideBar: sideBarData,
        };
    }

    if (params.slug === PathNames.Trainers) {
        // await fetchPageData(params.slug);

        interface list {
            picture: string;
            name: string;
            bio: string;
        }

        const data: list[] = [
            {
                picture:
                    "https://thumbs.dreamstime.com/b/personal-trainer-portrait-athletic-male-47980615.jpg",
                name: "Alf Ronny",
                bio: "Sollicitudin aenean senectus felis mi et diam sapien cras etiam",
            },
            {
                picture:
                    "https://thumbs.dreamstime.com/b/personal-trainer-portrait-athletic-male-47980615.jpg",
                name: "lolathan",
                bio: "Amet pharetra habitasse vivamus quam ante quis sagittis quisque luctus",
            },
        ];

        return {
            dataList: data || null,
            slug: params.slug,
        };
    }

    if (params.slug === PathNames.Belts) {
        return {
            slug: params.slug,
        };
    }

    if (params.slug === PathNames.Boardmembers) {
        await fetchPageData(params.slug);

        return {
            title: pageData.data.attributes.title,
            content: pageData.data.attributes.text,
            slug: params.slug,
        };
    }

    if (params.slug === PathNames.Competitions) {
        await fetchPageData(params.slug);

        const competitions = [
            {
                title: "",
                text: "",
            },
        ];

        return {
            title: pageData.data.attributes.title,
            content: pageData.data.attributes.text,
            competitions: competitions,
            slug: params.slug,
        };
    }

    throw error(404, "Not found");
}) satisfies PageLoad;

const fetchPageData = async (endpoint: string) => {
    const res = await fetch(`${BASE_URL}/api/${endpoint}`, {
        headers: {
            Authorization: `Bearer ${AUTH_TOKEN}`,
        },
    });
    pageData = await res.json();
    htmlParser(pageData);
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
