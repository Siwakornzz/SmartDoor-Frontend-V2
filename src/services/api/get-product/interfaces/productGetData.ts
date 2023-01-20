export interface ResProductData {
    resCode: string;
    resData: ResProductGetData;
    msg: string;
}

export interface ResProductGetData {
    id: number
    title: string
    price: number
    description: string
}
