export interface PageDataResponse {
    meta: any;
    data: any;
}

export interface BlackBeltsResponse {
    data: BlackBeltsData[];
    meta: Pagination;
}

export interface Pagination {
    page: number;
    pageSize: number;
    pageCount: number;
    total: number;
}

export interface BlackBeltAttributes {
    createdAt: string;
    dan: string;
    date: string;
    name: string;
    place: string;
    publishedAt: string;
    updatedAt: string;
}

export interface BlackBeltsData {
    id: number;
    attributes: BlackBeltAttributes;
}

interface ImageFormat {
    name: string;
    hash: string;
    ext: string;
    mime: string;
    path: string | null;
    width: number;
    height: number;
    size: number;
    url: string;
}

interface ImageData {
    id: number;
    attributes: {
        name: string;
        alternativeText: string | null;
        caption: string | null;
        width: number;
        height: number;
        formats: {
            thumbnail: ImageFormat;
            medium: ImageFormat;
            small: ImageFormat;
            [key: string]: ImageFormat;
        };
        hash: string;
        ext: string;
        mime: string;
        size: number;
        url: string;
        previewUrl: string | null;
        provider: string;
        provider_metadata: any;
        createdAt: string;
        updatedAt: string;
    };
}

interface GalleryData {
    data: ImageData[];
}

interface ArticleData {
    id: number;
    attributes: {
        title: string;
        text: string;
        createdAt: string;
        updatedAt: string;
        publishedAt: string;
        pics: GalleryData;
    };
}

export interface APIResponse {
    data: ArticleData[];
    meta: {
        pagination: {
            page: number;
            pageSize: number;
            pageCount: number;
            total: number;
        };
    };
}
