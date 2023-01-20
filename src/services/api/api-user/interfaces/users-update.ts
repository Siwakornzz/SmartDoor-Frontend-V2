export interface ReqUserUpdate {
    username: string;
    password: string;
    firstName: string;
    lastName: string;
    // position: string;
    phoneNumber: string;
    gender: string;
    role: string;
    // imageUser: string;
}

export interface ResUserUpdate {
    resCode: string;
    resData: ResUserUpdateData;
    msg: string;
}

export interface ResUserUpdateData {
    username: string;
    password: string;
    firstName: string;
    lastName: string;
    // position: string;
    phoneNumber: string;
    gender: string;
    role: string;
}

