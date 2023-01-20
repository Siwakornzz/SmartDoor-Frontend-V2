import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ApiUserService } from 'src/services/api/api-user/api-user.service';
import { ReqUserRegister } from 'src/services/api/api-user/interfaces/user-create-user';
import { ReqUserPagination, ResUserPagination } from 'src/services/api/api-user/interfaces/user-pagination';
import { ReqUserUpdate } from 'src/services/api/api-user/interfaces/users-update';
import { AppService, ResRole } from 'src/services/app.service';
import { SwalServiceService } from 'src/services/swal.service';

@Component({
    selector: 'app-manage-users',
    templateUrl: './manage-users.component.html',
    styleUrls: ['./manage-users.component.scss']
})
export class ManageUsersComponent implements OnInit {
    public isEdit = false;
    public userDialog: boolean = false;
    public userUpdateDialog: boolean = false;
    public submitted: boolean = false;
    public prefix: ResRole[] = [];
    public gender: ResRole[] = [];
    public role: ResRole[] = [];
    public position: ResRole[] = [];
    public haveUserPagingDatas = false;
    public userForm: FormGroup = new FormGroup({});
    public myForm: FormGroup = new FormGroup({});
    public files = [];

    public imgUser: any = null;

    public reqUserRegister: ReqUserAddOrUpdate = {
        id: '',
        username: '',
        password: '',
        // prefix: '',
        // nickname: '',
        firstName: '',
        lastName: '',
        // position: '',
        phoneNumber: '',
        // imageUser: '',
        role: '',
        gender: ''
    };

    public reqUserPagination: ReqUserPagination = {
        perPages: 1000,
        page: 1,
        search: ''
    };

    public resUserPagination: ResUserPagination = {
        resCode: '',
        resData: {
            totalItems: 0,
            itemsPerPage: 0,
            totalPages: 0,
            currentPage: 0,
            datas: []
        },
        msg: ''
    };

    constructor(private appService: AppService, private apiUser: ApiUserService, private swalService: SwalServiceService, private fb: FormBuilder) {}

    ngOnInit(): void {
        this.getGender();
        this.getRole();
        // this.getPrefix();
        // this.getPosition();
        this.getUserPagination();
    }

    base64Remove() {
        const imageName = 'userimg' + '.png';
        const imageBlob = this.dataURItoBlob(this.imgUser);
        const imageFile = new File([imageBlob], imageName, {type: 'image/png'});

        console.log('imageFile-->', imageFile);
        let formData: FormData = new FormData();
        formData.append('imageUser', imageFile);

        console.log('formData-->', formData);
        console.log('formData-->', typeof formData);

        this.apiUser.uploadsImages(formData).subscribe(
            (res) => {
                console.log('res-->', res);
            },
            (err) => {
                console.error(err);
            }
        );
    }

    // clear
    clearData() {
        this.reqUserRegister = {
            id: '',
            username: '',
            password: '',
            // prefix: '',
            // nickname: '',
            firstName: '',
            lastName: '',
            // position: '',
            phoneNumber: '',
            // imageUser: '',
            role: '',
            gender: ''
        };
    }

    dataURItoBlob(dataURI: any) {
        const byteString = window.atob(dataURI.toString().replace(/^data:image\/(png|jpeg|jpg);base64,/, ''));
        const arrayBuffer = new ArrayBuffer(byteString.length);
        const int8Array = new Uint8Array(arrayBuffer);
        for (let i = 0; i < byteString.length; i++) {
            int8Array[i] = byteString.charCodeAt(i);
        }
        const blob = new Blob([int8Array], {type: 'image/png'});
        return blob;
    }

    deleteImg() {
        if (this.imgUser !== null || this.imgUser !== undefined) {
            this.imgUser = '';
        }
    }

    getPrefix() {
        this.prefix = this.appService.getPrefix();
    }

    getGender() {
        this.gender = this.appService.getGender();
    }

    getPosition() {
        this.position = this.appService.getPosition();
    }

    getRole() {
        this.role = this.appService.getRole();
    }

    openNew() {
        this.reqUserRegister = {
            id: '',
            username: '',
            password: '',
            // prefix: '',
            // nickname: '',
            firstName: '',
            lastName: '',
            // position: '',
            phoneNumber: '',
            // imageUser: '',
            role: '',
            gender: ''
        };
        this.submitted = false;
        this.userDialog = true;
    }

    hideDialog() {
        this.userDialog = false;
        this.submitted = false;
    }

    findOneByUserId(id:string){
        
    }
    getUserPagination() {
        this.reqUserPagination.page = Number(this.reqUserPagination.page);
        this.reqUserPagination.perPages = Number(this.reqUserPagination.perPages);
        this.reqUserPagination.search = this.reqUserPagination.search;

        this.apiUser.userPagination(this.reqUserPagination).subscribe(
            (resp) => {
                console.log('userPagination -> ', resp);

                if (resp.resCode === '0000') {
                    this.resUserPagination = resp;

                    console.log('resUserPagination -> ', this.resUserPagination);

                    if (resp.resData.datas.length > 0) {
                        this.haveUserPagingDatas = true;
                    } else {
                        this.haveUserPagingDatas = false;
                    }
                } else {
                    this.haveUserPagingDatas = false;
                    // this.swalService.alert(false, resp.msg);
                }
            },
            (err) => {
                this.haveUserPagingDatas = false;
                // this.swalService.alert(false);
                console.error('userPagination -> ', err);
            }
        );
    }

    saveUser() {
        this.submitted = true;
        // console.log('imageUser -> ', this.reqUserRegister.imageUser);
        // upload image base 64 by form data
        const formData = new FormData();

        if (this.reqUserRegister.id && this.reqUserRegister.id !== '') {
            const _body: ReqUserUpdate = {
                username: this.reqUserRegister.username,
                password: this.reqUserRegister.password,
                // prefix: this.reqUserRegister.prefix,
                // nickname: this.reqUserRegister.nickname,
                firstName: this.reqUserRegister.firstName,
                lastName: this.reqUserRegister.lastName,
                gender: this.reqUserRegister.gender,
                // position: this.reqUserRegister.position,
                phoneNumber: this.reqUserRegister.phoneNumber,
                // imageUser: this.reqUserRegister.imageUser
                role: this.reqUserRegister.role
            };
            console.log('body', _body);

            this.apiUser.userUpdate(_body).subscribe(
                (resp) => {
                    this.clearData();
                    console.log('userUpdate -> ', resp);
                    if (resp.resCode === '0000') {
                        this.userDialog = false;
                        this.swalService.alert(true);
                        this.getUserPagination();
                    } else {
                        this.swalService.alert(false, resp.msg);
                    }
                },
                (err) => {
                    this.clearData();
                    console.error('userUpdate -> ', err);
                    this.swalService.alert(false);
                }
            );
        } else {
            const _body: ReqUserRegister = {
                username: this.reqUserRegister.username,
                password: this.reqUserRegister.password,
                // prefix: this.reqUserRegister.prefix,
                // nickname: this.reqUserRegister.nickname,
                firstName: this.reqUserRegister.firstName,
                lastName: this.reqUserRegister.lastName,
                // position: this.reqUserRegister.position,
                phoneNumber: this.reqUserRegister.phoneNumber,
                gender: this.reqUserRegister.gender,
                role: this.reqUserRegister.role
            };
            console.log('body', _body);
        }
        // formData.append('imageUser', this.reqUserRegister.imageUser);
        this.apiUser.userRegister(this.reqUserRegister).subscribe(
            (res) => {
                this.clearData();
                console.log('userRegister', res);
                if (res.resCode === '0000') {
                    this.userDialog = false;
                    this.swalService.alert(true);
                    this.getUserPagination();

                    // this.apiUser.uploadsImages(formData).subscribe(
                    //     (res) => {
                    //         console.log('uploadsImages', res);
                    //         if (res.resCode === '0000') {
                    //             this.userDialog = false;
                    //             this.swalService.alert(true);
                    //             this.getUserPagination();
                    //         } else {
                    //         }
                    //     },
                    //     (err) => {
                    //         console.error('uploadsImages', err);
                    //         this.swalService.alert(false);
                    //     }
                    // );
                }
            },
            (err) => {
                this.clearData();
                console.error('userRegister', err);
                this.swalService.alert(false);
            }
        );
    }

    delete(userId: number) {
        this.swalService
            .confirmAlert('ต้องการลบข้อมูลผู้ใช้งาน ?', 'ต้องการลบข้อมูลผู้ใช้งาน ใช่หรือไม่', 'ลบข้อมูลผู้ใช้งาน', 'ยกเลิก')
            .then((resp) => {
                if (resp) {
                    this.apiUser.deleteUserById(userId).subscribe(
                        (resp) => {
                            if (resp.resCode === '0000') {
                                this.swalService.alert(true);
                                this.getUserPagination();
                            } else {
                                this.swalService.alert(false, resp.msg);
                            }
                        },
                        (err) => {
                            console.error('deleteUser -> ', err);
                            this.swalService.alert(false);
                        }
                    );
                }
            })
            .catch((err) => {
                console.error('confirmAlert -> ', err);
            });
    }

    // this.apiUser.uploadsImages(res.resData.id.toString(), FormData).subscribe(
    //     (res) => {
    //         this.userDialog = false;
    //         this.swalService.alert(true);
    //         this.getUserPagination();

    getUserById(id: string) {
        this.apiUser.getUserById(id).subscribe(
            (resp) => {
                console.log('getUserById -> ', resp);
                if (resp.resCode === '0000' && resp.resData) {
                    this.reqUserRegister = {
                        id: resp.resData.id,
                        username: resp.resData.username,
                        password: '',
                        // prefix: resp.resData.prefix,
                        firstName: resp.resData.firstName,
                        lastName: resp.resData.lastName,
                        // nickname: resp.resData.nickname,
                        gender: resp.resData.gender,
                        phoneNumber: resp.resData.phoneNumber,
                        role: resp.resData.role
                        // position: resp.resData.position,
                        // imageUser: null
                    };
                } else {
                    this.swalService.alert(false, resp.msg);
                }

                this.initForm();
            },
            (err) => {
                console.error('getUserById -> ', err);
            }
        );
    }

    initForm() {
        this.myForm = this.fb.group({
            // prefix: new FormControl('', Validators.required),
            firstName: new FormControl('', Validators.required),
            lastName: new FormControl('', Validators.required),
            // nickname: new FormControl('', Validators.required),
            username: new FormControl('', Validators.required),
            password: this.reqUserRegister.id ? new FormControl() : new FormControl('', Validators.required),
            // role: new FormControl('', Validators.required),
            phoneNumber: new FormControl('', Validators.required),
            gender: new FormControl('', Validators.required)
            // position: new FormControl('', Validators.required),
            // imageUser: new FormControl('', Validators.required)
        });

        this.userForm = this.fb.group({
            username: new FormControl('', Validators.required),
            password: new FormControl('', Validators.required)
        });
    }

    loadDataCrud() {
        // this.getPrefix();
        this.getGender();
        this.getRole();
        // this.getPosition();
    }

    openModelEdited(id: string) {
        this.userDialog = true;
        this.clearData();
        this.loadDataCrud();
        this.getUserById(id);
    }

    checkDisabled() {
        if (this.reqUserRegister.username === null || this.reqUserRegister.username === '') {
            // console.log(true);

            return true;
        } else {
            console.log(false);
            return false;
        }
    }

    handleUpload(event: any) {
        const file = event.target.files[0];
        const reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onload = () => {
            this.imgUser = reader.result;
        };
    }
}

interface ReqUserAddOrUpdate {
    id?: string;
    username: string;
    password: string;
    // prefix: string;
    firstName: string;
    lastName: string;
    // nickname: string;
    gender: string;
    phoneNumber: string;
    role: string;
    // position: string;
    // imageUser: any;
}
