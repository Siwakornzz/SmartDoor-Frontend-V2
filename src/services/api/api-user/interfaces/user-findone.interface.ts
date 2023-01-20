export interface ResUserFindOne {
    resCode: string;
    msg: string;
    resData: ResUserFindOneResData;
}

export interface ResUserFindOneResData {
    id: string;
    name: string;
    createdAt: string;
    userId: string;
    updatedAt: string;
    docFileLists: ResUSerFindOneFileList[];
}

export interface ResUSerFindOneFileList {
    id: string;
    fileName: string;
    createdAt: string;
    updatedAt: string;
    fileSize: number;
    fileFullPath: string;
}

// ─────────────────────────────────────────────────────────────────────────────

export interface WorkList {
    startDate: string;
    endDate: string;
    day: string[];
    zone: string[];
    _id: string;
}
