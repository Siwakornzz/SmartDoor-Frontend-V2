import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';

@Injectable({
    providedIn: 'root'
})
export class AppService {
    public user: any = null;
    public isReceivePages: boolean = false;
    public trackingCodes: string[] = [];
    private role: string = '';

    constructor(private router: Router) { }

    async logout() {
        localStorage.removeItem('accessToken');
        // localStorage.removeItem('gatekeeper_token');
        this.user = null;
        await Swal.fire({
            icon: 'success',
            title: '',
            text: 'ออกจากระบบสำเร็จ',
            showConfirmButton: false,
            timer: 1000
        });
        await this.router.navigate(['/login']);
    }

    async setRole(roleInfo: string) {
        localStorage.setItem('role', roleInfo);
        // this.role = roleInfo;
    }

    async getRoleInfo() {
        return localStorage.getItem('role');
    }
    delay(time: number) {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve(null);
            }, time);
        });
    }

    getPrefix() {
        const prefix: ResRole[] = [
            { name: 'นาย', data: 'นาย' },
            { name: 'นาง', data: 'นาง' },
            { name: 'นางสาว', data: 'นางสาว' }
        ];
        return prefix;
    }
    getGender() {
        const gender: ResRole[] = [
            { name: 'ผู้ชาย', data: 'ผู้ชาย' },
            { name: 'ผู้หญิง', data: 'ผู้หญิง' },
            { name: 'อื่นๆ', data: 'อื่นๆ' }
        ];
        return gender;
    }

    getPosition() {
        const position: ResRole[] = [
            { name: 'ประเมินพื้นที่', data: 'ประเมินพื้นที่' },
            { name: 'ตรวจสอบพื้นที่', data: 'ตรวจสอบพื้นที่' }
        ];
        return position;
    }

    getInputType() {
        const inputType: ResRole[] = [
            { name: 'Checkbox', data: 'checkBox' },
            { name: 'Image ', data: 'image' },
            { name: 'MultiSelect', data: 'multiSelect' },
            { name: 'Radio', data: 'radio' },
            { name: 'Rating', data: 'rating' },
            { name: 'RankStar ', data: 'rankStar' },
            { name: 'Scroll ', data: 'scroll' },
            { name: 'Select', data: 'select' },
            { name: 'Text', data: 'text' },
            { name: 'Textarea', data: 'textArea' }
        ];

        return inputType;
    }

    getRequireType() {
        const RequireType: ResRoleBoolean[] = [
            { name: 'บังคับกรอก', data: true },
            { name: 'ไม่บังคับกรอก', data: false }
        ];

        return RequireType;
    }

    getRole() {
        const role: ResRole[] = [
            { name: 'superAdmin', data: 'ผู้ดูแลระบบ' },
            { name: 'users', data: 'ผู้ใช้งาน' }
        ];

        return role;
    }

    getAssessmentType() {
        const role: ResRole[] = [
            { name: 'แบบตรวจสอบความสะอาด', data: 'แบบตรวจสอบความสะอาด' },
            { name: 'แบบประเมิณความสะอาด', data: 'แบบประเมิณความสะอาด' }
        ];

        return role;
    }

    getDayOfWeek() {
        const dayOfweek: ResRole[] = [
            { name: 'วันจันทร์', data: 'Monday' },
            { name: 'วันอังคาร', data: 'Tuesday' },
            { name: 'วันพุธ', data: 'Wednesday' },
            { name: 'วันพฤหัสบดี', data: 'Thursday' },
            { name: 'วันศุกร์', data: 'Friday' }
        ];
        return dayOfweek;
    }

    successAlert(isSuccess: boolean, titles: string, time?: number) {
        if (isSuccess) {
            Swal.fire({
                icon: 'success',
                title: titles ? titles : 'สำเร็จ',
                showConfirmButton: false,
                timer: 1500
            });
            return;
        }
        if (!isSuccess) {
            Swal.fire({
                icon: 'error',
                title: titles ? titles : 'ไม่สำเร็จ',
                showConfirmButton: false,
                timer: 1500
            });
        }
    }
}

export interface ResRole {
    name: string;
    data: string;
}

export interface ResRoleBoolean {
    name: string;
    data: Boolean;
}

export interface ResRoleNumber {
    name: string;
    data: number;
}

