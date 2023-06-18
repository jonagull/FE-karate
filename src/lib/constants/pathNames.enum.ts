export enum PathNames {
    Home = "/",
    Training = "training",
    Club = "club",
    Blackbelts = "blackbelts",
    Boardmembers = "boardmember",
    Competitions = "competitions",
    Posts = "posts",
    Trainers = "trainers",
    Links = "links",
    Galleries = "galleries",
    History = "history",
    Encyclopedia = "encyclopedia",
    Rating = "rating",
    Kata = "kata",
    Kihon = "kihon",
}

export enum PicsPaths {
    OwnCollections = "bilder-egne-samlingers",
    OurClub = "our-clubs",
    ProfilesAndHistory = "profile-histories",
    TripsAndCompetitions = "trips-competitions",
    TripsAndCollection = "trip-collections",
}

export const SingularSlugs = [
    PathNames.Home,
    PathNames.Training,
    PathNames.Club,
    PathNames.Boardmembers,
    PathNames.History,
    PathNames.Kata,
    PathNames.Kihon,
    PathNames.Rating,
    PathNames.Encyclopedia,
];

export const CollectionSlugs = [
    PathNames.Posts,
    PathNames.Blackbelts,
    PathNames.Boardmembers,
    PathNames.Competitions,
    PathNames.Galleries,
];
