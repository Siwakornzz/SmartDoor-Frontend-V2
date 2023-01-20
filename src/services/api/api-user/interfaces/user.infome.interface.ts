export interface ResInfoMe {
    resCode: string
    msg: string
    resData: ResInfoMeData
}

export interface ResInfoMeData {
    email: string
    userName: string
    firstName: string
    lastName: string
    role: string
    status: boolean
    gender: string
    phoneNumber: string
}