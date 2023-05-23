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

export const load = (async () => {
    latestsPosts = await fetchPageData(PathNames.Posts);
    homeData = await fetchPageData("home");

    return {
        homeData: homeData.data,
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
}) satisfies PageLoad;
