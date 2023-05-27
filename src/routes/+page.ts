import { PathNames } from "$lib/constants/pathNames.enum";
import { fetchPageData } from "$lib/helpers/api";
import type { PageLoad } from "./$types";

interface SingularPageData {
    data: HomeData;
    meta: any;
}

interface HomeData {
    attributes: {
        text: string;
        title: string;
    };
}

let latestsPosts: any = [];
let homeData: any;
let heroData: any;

export const load = (async () => {
    latestsPosts = await fetchPageData(PathNames.Posts);
    homeData = await fetchPageData("home");
    heroData = await fetchPageData("heroPage", true);

    return {
        homeData: homeData.data,
        heroData: heroData.data,
        latestsPosts: latestsPosts.data
            .filter((x: any) => {
                if (!x.attributes.archive_date || !x.attributes.archive_date) {
                    return false;
                }

                const archiveDate = new Date(x.attributes.archive_date);
                const publishDate = new Date(x.attributes.publish_date);
                const today = new Date();

                if (publishDate.getTime() >= today.getTime()) {
                    return false;
                }

                if (archiveDate.getTime() >= today.getTime()) {
                    return true;
                }
            })
            .sort((a: any, b: any) => b.id - a.id),
    };
}) satisfies PageLoad;
