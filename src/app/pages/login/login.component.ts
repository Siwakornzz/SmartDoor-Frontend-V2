import { THEM_LISTS } from './../../../services/app.config.service';
import { Component, OnInit, Renderer2 } from '@angular/core';
import { Subscription } from 'rxjs';
import { ApiLoginService } from 'src/services/api/api-login/api-login.service';
import { reqLogin } from 'src/services/api/api-login/interfaces/api-login';
import { LocalService, userLocal } from 'src/services/local.service';
import Swal from 'sweetalert2';
import { Router } from '@angular/router';
import { ApiUserService } from 'src/services/api/api-user/api-user.service';
import { AppService } from 'src/services/app.service';

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
    public valCheck: string[] = ['remember'];
    subscription: Subscription = new Subscription();
    public isAuthLoading = false;
    public password!: string;
    public reqLogin: reqLogin = {
        // username: '',
        // password: ''
        username: 'aun',
        password: 'aun'
    };

    constructor(private renderer: Renderer2, private apiLogin: ApiLoginService, private router: Router, private localService: LocalService, private apiUserService: ApiUserService, private appService: AppService) { }

    ngOnInit() {
        this.renderer.addClass(document.querySelector('app-root'), 'login');
        this.localService.clearToken();
        this.apiUserService.userInfoMe();

    }

    ngOnDestroy() {
        if (this.subscription && !this.subscription.closed) {
            this.subscription.unsubscribe();
        }
    }

    infome() {
        this.apiUserService.userInfoMe().subscribe(
            async (res) => {
                if (res.resCode === '0000') {
                    this.appService.setRole(res.resData.role)
                }
            }, async (err) => {
                console.log(err);
                await Swal.fire({
                    icon: 'error',
                    title: '',
                    text: err.message,
                    timer: 3000
                });
            }
        )
    }
    async login() {
        this.isAuthLoading = true;
        const body = {
            username: this.reqLogin.username,
            password: this.reqLogin.password
        };

        // console.log('body->', body);

        this.apiLogin.usersLogin(body).subscribe(
            async (res) => {
                // console.log('resLogin->', res);
                // console.log('res->', res.resData.id);

                if (res.resCode === '0000') {
                    this.localService.setToken(res.resData.accessToken);
                    this.localService.setRefreshToken(res.resData.refreshToken);

                    const userSetLocal = {
                        id: res.resData.id,
                        username: res.resData.username,
                        // nickname: res.resData.nickname,
                        firstName: res.resData.firstName,
                        lastName: res.resData.lastName,
                        position: res.resData.position,
                        phoneNumber: res.resData.phoneNumber,
                        gender: res.resData.gender
                    };

                    this.localService.setUserInfo(userSetLocal);
                    this.infome();

                    await Swal.fire({
                        icon: 'success',
                        title: '',
                        text: 'เข้าสู่ระบบสำเร็จ',
                        showConfirmButton: false,
                        timer: 3000
                    });
                    this.isAuthLoading = false;


                    await this.router.navigate(['dashboard']);
                } else {
                    // console.log('no pass');
                    await Swal.fire({
                        icon: 'error',
                        title: '',
                        text: 'ชื่อผู้ใช้หรือรหัสผ่านไม่ถูกต้อง !!',
                        timer: 3000
                    })
                }
            },
            (err) => {
                // console.log('err->', err);
                Swal.fire({
                    icon: 'error',
                    title: '',
                    text: 'ชื่อผู้ใช้หรือรหัสผ่านไม่ถูกต้อง !!',
                    showConfirmButton: false,
                    timer: 3000
                });
                this.isAuthLoading = false;
                this.reqLogin.password = '';
            }
        );
    }
    isBtnDisabled() {
        if (!!this.reqLogin.password && this.reqLogin.password !== '' && !!this.reqLogin.username && this.reqLogin.username !== '') {
            return false;
        } else {
            return true;
        }
    }
}
