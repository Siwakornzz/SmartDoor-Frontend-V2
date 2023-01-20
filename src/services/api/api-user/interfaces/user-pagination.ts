export interface ReqUserPagination {
    perPages: number;
    page: number;
    search: string;
}

export interface ResUserPagination {
    resCode: string;
    resData: ResUserPaginationData;
    msg: string;
}

export interface ResUserPaginationData {
    totalItems: number;
    itemsPerPage: number;
    totalPages: number;
    currentPage: number;
    datas: ResUserPaginationDataData[];
}

export interface ResUserPaginationDataData {
    id: string;
    username: string;
    nickname: string;
    prefix: string;
    firstName: string;
    lastName: string;
    position: string;
    phoneNumber: string;
    imageUser: string;
    gender: string;
    role: string;
    createdAt: string;
}

