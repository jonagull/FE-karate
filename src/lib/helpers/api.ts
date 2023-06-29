import { PathNames, PicsPaths } from "$lib/constants/pathNames.enum";
import { AUTH_TOKEN, BASE_URL } from "$lib/constants/variables";

const sortedEndpoints = [
    PathNames.Competitions,
    PathNames.Posts,
    PicsPaths.OurClub,
    PicsPaths.TripsAndCompetitions,
    PicsPaths.TripsAndCollection,
    PicsPaths.OwnCompetitions,
    PicsPaths.OwnCollections,
    PicsPaths.ProfilesAndHistory,
    PicsPaths.Films,
];

export const fetchPageData = async (endpoint: string, withImgs = false) => {
    const res = await fetch(
        `${BASE_URL}/api/${
            sortedEndpoints.includes(endpoint as PathNames)
                ? endpoint + "?sort=publish_date:desc"
                : endpoint
        }${withImgs ? "?populate=*" : ""}`,
        {
            headers: {
                Authorization: `Bearer ${AUTH_TOKEN}`,
            },
        }
    );

    const response = await res.json();

    return response;
};
