export interface ResUserById {
    resCode: string;
    resData: ResUserByIdData;
    msg: string;
}

export interface ResUserByIdData {
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
}
