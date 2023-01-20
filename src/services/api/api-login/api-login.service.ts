import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { reqLogin, resLogin } from './interfaces/api-login';

@Injectable({
    providedIn: 'root'
})
export class ApiLoginService {

    constructor(private http: HttpClient) { }
    usersLogin(body: reqLogin): Observable<resLogin> {
        return this.http.post<resLogin>(
            `${environment.url}/users/login`,
            body
        );
    }
}
