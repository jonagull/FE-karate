import { PathNames } from "$lib/constants/pathNames.enum";
import { fetchPageData } from "$lib/helpers/api";

let pageData: any;
let latestsPosts: any = [];

export const load = async () => {
    latestsPosts = await fetchPageData(PathNames.Posts);

    if (!pageData) {
        return;
    }

    return {
        title: pageData.data.attributes.title,
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
