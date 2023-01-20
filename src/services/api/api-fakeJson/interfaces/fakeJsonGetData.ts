export interface ResFakeJsonData {
    resCode: string;
    resData: ResFakeJsonGetData;
    msg: string;
}

export interface ResFakeJsonGetData {
    userId: number
    id: number
    title: string
    completed: boolean
}
