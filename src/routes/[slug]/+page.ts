import { error } from "@sveltejs/kit";
import type { PageLoad } from "./$types";
import { PathNames } from "../../constants/pathNames.enum";
import { AUTH_TOKEN, BASE_URL } from "../../constants/variables";

let pageData: Lol;
let sideBarData: string[];
let mutatedMarkup: any;

export const load = (async ({ params }) => {
    if (params.slug === PathNames.Club) {
        await fetchPageData(params.slug);
        const parser = new DOMParser();
        return {
            title: pageData.data.attributes.title,
            content: pageData.data.attributes.text,
            mutatedMarkup: mutatedMarkup,
            pageData: pageData,
            sideBar: sideBarData || [],
        };
    }

    if (params.slug === PathNames.Training) {
        await fetchPageData(params.slug);
        const parser = new DOMParser();

        return {
            title: pageData.data.attributes.title,
            content: pageData.data.attributes.text,
            mutatedMarkup: mutatedMarkup,
            pageData: pageData,
            sideBar: sideBarData,
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
    const parser = new DOMParser();
    const doc = parser.parseFromString(pD.data.attributes.text, "text/html");
    const paragraphs = doc.querySelectorAll("h3");

    const tempElement = document.createElement("div");
    tempElement.innerHTML = pD.data.attributes.text;

    const h3Elements = tempElement.getElementsByTagName("h3");
    for (let i = 0; i < h3Elements.length; i++) {
        const h3Text = h3Elements[i].textContent;
        h3Elements[i].setAttribute("id", h3Text || "failed");
    }

    mutatedMarkup = tempElement.innerHTML;
    sideBarData = Array.from(paragraphs).map((x) => x.innerText);
};
