import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root'
})
export class LocalService {
    public paramiter: Parameter = {
        assessmentId: '',
        userId: '',
        zoneId: '',
        templateType: ''
    };
    constructor() { }

    setParameter(body: Parameter) {
        this.paramiter = body;
    }

    setProfile(userLocal: userLocal) {
        localStorage.setItem('profile', JSON.stringify(userLocal));
    }

    getProfile(): userLocal {
        let result = JSON.parse(localStorage.getItem('profile') || '');

        if (result == null) {
            result = undefined;
        }

        const _res: userLocal = JSON.parse(result);
        return _res;
    }

    clearProfile() {
        localStorage.removeItem('profile');
    }

    // ─────────────────────────────────────────────────────────────────

    setToken(accessToken: string) {
        localStorage.setItem('accessToken', accessToken);
    }

    setRefreshToken(refreshToken: string) {
        localStorage.setItem('refreshToken', refreshToken);
    }

    setUserInfo(userInfo: any) {
        let userInfoParse = JSON.stringify(userInfo);
        localStorage.setItem('userInfo', userInfoParse);
    }

    // ──────────────────────────────────────────────────────────────
    getParameter() {
        return this.paramiter;
    }

    getUserInfo() {
        return localStorage.getItem('userInfo');
    }
    getToken() {
        return localStorage.getItem('accessToken');
    }
    getRefreshToken() {
        return localStorage.getItem('refreshToken');
    }

    setTokenExpire(tokenExpire: string) {
        if (!tokenExpire) {
            return null;
        }
        localStorage.setItem(EnumLocalStorageKey.tokenExpire, tokenExpire);
        return this.getToken();
    }

    getTokenExpire() {
        return localStorage.getItem(EnumLocalStorageKey.tokenExpire);
    }

    clearToken() {
        localStorage.clear();
    }

    clearTokenExpire() {
        localStorage.removeItem(EnumLocalStorageKey.tokenExpire);
    }
}

export interface userLocal {
    id: number;
    prefix: string;
    firstName: string;
    lastName: string;
    nickname: string;
    gender: string;
    phoneNumber: string;
    role: string;
    position: string;
    imageUser: string;
}

export enum EnumLocalStorageKey {
    userInfo = 'userInfo',
    accessToken = 'accessToken',
    tokenExpire = 'tokenExpire'
    // accessAssignConfig = 'accessAssignConfig'
}

export interface Parameter {
    assessmentId: string;
    userId: string;
    zoneId: string;
    templateType: string;
}
export interface ParameterEstimate {
    assessmentId: string;
    zoneId: string;
    templateType: string;
}
