export interface ResUploadsImage {

}

export interface ResUploadsImage {
  resCode: string;
  resData: ResUploadsImageData;
  msg: string;
}

export interface ResUploadsImageData {
msg(arg0: boolean, msg: any): unknown;
_id: string;
username: string;
password: string;
nickname: string;
prefix: string;
firstName: string;
lastName: string;
position: string;
phoneNumber: string;
gender: string;
role: string;
createdAt: string;
__v: number;
imageUser: string;
}
