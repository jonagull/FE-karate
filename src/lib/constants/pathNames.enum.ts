export enum PathNames {
    Home = "/",
    Training = "training",
    Club = "club",
    Belts = "belts",
    Boardmembers = "boardmember",
    Competitions = "competitions",
    Posts = "posts",
    Trainers = "trainers",
    Links = "links",
    Gallery = "gallery",
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
    PathNames.Belts,
    PathNames.Boardmembers,
    PathNames.Competitions,
];
