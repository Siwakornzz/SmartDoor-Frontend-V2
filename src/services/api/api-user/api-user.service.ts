import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { ReqUserRegister, ResUserRegister } from './interfaces/user-create-user';
import { ResUserDelete } from './interfaces/user-delete';
import { ResFindAllUser } from './interfaces/user-findAllUser';
import { ReqUserPagination, ResUserPagination } from './interfaces/user-pagination';
import { ResUploadsImage } from './interfaces/user-upload-image';
import { ResInfoMe } from './interfaces/user.infome.interface';
import { ResUserById } from './interfaces/users-by-id';
import { ReqUserUpdate, ResUserUpdate } from './interfaces/users-update';

@Injectable({
    providedIn: 'root'
})
export class ApiUserService {
    constructor(private http: HttpClient) { }

    userRegister(body: ReqUserRegister): Observable<ResUserRegister> {
        return this.http.post<ResUserRegister>(`${environment.url}/users/createUser`, body);
    }

    deleteUserById(userId: number): Observable<ResUserDelete> {
        return this.http.delete<ResUserDelete>(`${environment.url}/users/deleteUserById/${userId}`);
    }

    userPagination(body: ReqUserPagination): Observable<ResUserPagination> {
        return this.http.post<ResUserPagination>(`${environment.url}/users/paginationUser`, body);
    }

    uploadsImages(imagePath: FormData) {
        let headers = new HttpHeaders();
        headers = headers.append('Content-Type', 'multipart/form-data');
        headers = headers.append('Accept', '*/*');
        return this.http.post<ResUploadsImage>(`${environment.url}/users/uploads-image/users`, imagePath, { headers });
    }
    getUserById(id: string): Observable<ResUserById> {
        return this.http.get<ResUserById>(`${environment.url}/users/findOneUserByUserId/${id}`);
    }

    userUpdate(body: ReqUserUpdate): Observable<ResUserUpdate> {
        return this.http.post<ResUserUpdate>(`${environment.url}/users/updateUserById`, body);
    }

    findAllUser(): Observable<ResFindAllUser> {
        return this.http.get<ResFindAllUser>(`${environment.url}/users/findAllUser`);
    }
    userInfoMe(): Observable<ResInfoMe> {
        return this.http.get<ResInfoMe>(`${environment.url}/users/infoMe`);
    }
}
