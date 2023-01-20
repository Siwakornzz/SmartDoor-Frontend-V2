export interface ResFindAllUser{
    resCode: string;
    resData: ResFindAllUserData;
    msg: string;
}

export interface ResFindAllUserData {
    id: string;
    firstName: string
    lastName: string
}
