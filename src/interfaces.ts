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
