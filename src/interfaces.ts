interface Lol {
    meta: any;
    data: Data;
}

interface Data {
    id: number;
    attributes: Attributes;
}

interface Attributes {
    title: string;
    text: string;
    createdAt?: Date;
    updatedAt?: Date;
    publishedAt?: Date;
}
