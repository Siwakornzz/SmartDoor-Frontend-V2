export interface ReqUserRegister {
    username: string;
    password: string;
    // prefix: string
    // nickname: string
    firstName: string;
    lastName: string;
    // position: string
    phoneNumber: string;
    gender: string;
    role: string;
}
export interface ResUserRegister {
    resCode: string;
    resData: ResUserRegisterData;
    msg: string;
}

export interface ResUserRegisterData {
    id: number;
    email: string;
    userName: string;
    firstName: string;
    lastName: string;
    gender: string;
    // role: ResUsersRegisterDataRole;
    // status: boolean;
    // gender: ResUsersRegisterDataGender;
    // phoneNumber: string;
    // agencyLists: ResUsersRegisterDataAgencyList[];
}
