import { PathNames } from "$lib/constants/pathNames.enum";
import { AUTH_TOKEN, BASE_URL } from "$lib/constants/variables";

let pageData: any;
let latestsPosts: any;

const fetchPageData = async (endpoint: string) => {
    const res = await fetch(`${BASE_URL}/api/${endpoint}`, {
        headers: {
            Authorization: `Bearer ${AUTH_TOKEN}`,
        },
    });

    if (endpoint === "home") {
        pageData = await res.json();
    } else {
        latestsPosts = await res.json();
    }
};

export const load = async () => {
    await fetchPageData("home");
    await fetchPageData("posts");

    if (!pageData) {
        return;
    }

    return {
        title: pageData.data.attributes.title,
        content: pageData.data.attributes.text,
        pageData: pageData,
        latestsPosts: latestsPosts.data
            .filter((x: any) => {
                if (!x.attributes.archive_date) {
                    return false;
                }

                const archiveDate = new Date(x.attributes.archive_date);
                const today = new Date();

                if (archiveDate.getTime() >= today.getTime()) {
                    return true;
                }
            })
            .sort((a: any, b: any) => b.id - a.id),
    };
};
