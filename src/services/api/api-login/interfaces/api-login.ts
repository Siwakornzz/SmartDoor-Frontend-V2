export interface reqLogin {
    username: string;
    password: string;
}

export interface resLogin {
    resCode: string;
    msg: string;
    resData: findAllLoginData;
}
export interface findAllLoginData {
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
    accessToken: string;
    refreshToken: string;
    expire: string;
}
