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
