import { MenuItem } from 'primeng/api';
import { AppMainComponent } from './../../layout/app-main/app-main.component';
import { Component, OnInit } from '@angular/core';
import { AppService } from 'src/services/app.service';

@Component({
    selector: 'app-menu',
    templateUrl: './menu.component.html',
    styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {
    public model: MenuItem[] = [];

    constructor(public appMain: AppMainComponent, private appService: AppService) { }

    async ngOnInit() {
        this.model = [
            {
                label: 'เมนู',
                items: [

                    // // HeadTitle 1
                    // {
                    //     label: 'วัดประสิทธิภาพ',
                    //     icon: 'pi pi-fw pi-home',
                    //     routerLink: ['/']
                    // },
                    // HeadTitle 2
                    // {
                    //     label: 'รายงาน',
                    //     icon: 'pi pi-fw pi-home',
                    //     items: [
                    //         {
                    //             label: 'รายงานแกนนำตำบล',
                    //             routerLink: ['/report-district-leader']
                    //         },
                    //         {
                    //             label: 'รายงานแกนนำหมู่บ้าน',
                    //             routerLink: ['/report-village-leader']
                    //         },
                    //         {
                    //             label: 'รายงานหัวหน้าทีม',
                    //             routerLink: ['/report-team-leader']
                    //         }
                    //     ],
                    //     routerLink: ['/report']
                    // },

                    // HeadTitle3

                    {
                        label: 'จัดการประตู ',
                        icon: 'pi pi-fw pi-home',
                        routerLink: ['pages/manage-doors'],
                        disabled: false
                    },
                    // HeadTitle 4 

                    {
                        label: 'จัดการผู้ใช้งาน',
                        icon: 'pi pi-fw pi-user',
                        routerLink: ['pages/manage-users'],
                        disabled: await this.appService.getRoleInfo() === 'superAdmin' ? false : true,
                    }
                ]
            },
            {
                label: 'TestApiFakeJson',
                items: [
                    {
                        label: 'TestApiFakeJson',
                        icon: 'pi pi-fw  pi-cog',
                        routerLink: ['/pages/fakeJson'],
                        disabled: false
                    }
                ]
            },
            {
                label: 'product',
                items: [
                    {
                        label: 'product',
                        icon: 'pi pi-fw  pi-cog',
                        routerLink: ['/pages/product'],
                        disabled: false
                    }
                ]
            },
            {
                label: 'การตั้งค่า',
                items: [
                    {
                        label: 'ผู้ดูแลระบบ',
                        icon: 'pi pi-fw  pi-cog',
                        routerLink: ['/pages/timeline'],
                        disabled: true
                    }
                ]
            }
            // {
            //     label: 'UI Components',
            //     items: [
            //         {
            //             label: 'Form Layout',
            //             icon: 'pi pi-fw pi-id-card',
            //             routerLink: ['/uikit/formlayout'],
            //         },
            //         {
            //             label: 'Input',
            //             icon: 'pi pi-fw pi-check-square',
            //             routerLink: ['/uikit/input'],
            //         },
            //         {
            //             label: 'Float Label',
            //             icon: 'pi pi-fw pi-bookmark',
            //             routerLink: ['/uikit/floatlabel'],
            //         },
            //         {
            //             label: 'Invalid State',
            //             icon: 'pi pi-fw pi-exclamation-circle',
            //             routerLink: ['/uikit/invalidstate'],
            //         },
            //         {
            //             label: 'Button',
            //             icon: 'pi pi-fw pi-mobile',
            //             routerLink: ['/uikit/button'],
            //             class: 'rotated-icon',
            //         },
            //         {
            //             label: 'Table',
            //             icon: 'pi pi-fw pi-table',
            //             routerLink: ['/uikit/table'],
            //         },
            //         {
            //             label: 'List',
            //             icon: 'pi pi-fw pi-list',
            //             routerLink: ['/uikit/list'],
            //         },
            //         {
            //             label: 'Tree',
            //             icon: 'pi pi-fw pi-share-alt',
            //             routerLink: ['/uikit/tree'],
            //         },
            //         {
            //             label: 'Panel',
            //             icon: 'pi pi-fw pi-tablet',
            //             routerLink: ['/uikit/panel'],
            //         },
            //         {
            //             label: 'Overlay',
            //             icon: 'pi pi-fw pi-clone',
            //             routerLink: ['/uikit/overlay'],
            //         },
            //         {
            //             label: 'Media',
            //             icon: 'pi pi-fw pi-image',
            //             routerLink: ['/uikit/media'],
            //         },
            //         {
            //             label: 'Menu',
            //             icon: 'pi pi-fw pi-bars',
            //             routerLink: ['/uikit/menu'],
            //             preventExact: true,
            //         },
            //         {
            //             label: 'Message',
            //             icon: 'pi pi-fw pi-comment',
            //             routerLink: ['/uikit/message'],
            //         },
            //         {
            //             label: 'File',
            //             icon: 'pi pi-fw pi-file',
            //             routerLink: ['/uikit/file'],
            //         },
            //         {
            //             label: 'Chart',
            //             icon: 'pi pi-fw pi-chart-bar',
            //             routerLink: ['/uikit/charts'],
            //         },
            //         {
            //             label: 'Misc',
            //             icon: 'pi pi-fw pi-circle',
            //             routerLink: ['/uikit/misc'],
            //         },
            //     ],
            // },
            // {
            //     label: 'Prime Blocks',
            //     items: [
            //         {
            //             label: 'Free Blocks',
            //             icon: 'pi pi-fw pi-eye',
            //             routerLink: ['/blocks'],
            //             badge: 'NEW',
            //         },
            //         {
            //             label: 'All Blocks',
            //             icon: 'pi pi-fw pi-globe',
            //             url: ['https://www.primefaces.org/primeblocks-ng'],
            //             target: '_blank',
            //         },
            //     ],
            // },
            // {
            //     label: 'Utilities',
            //     items: [
            //         {
            //             label: 'PrimeIcons',
            //             icon: 'pi pi-fw pi-prime',
            //             routerLink: ['/icons'],
            //         },
            //         {
            //             label: 'PrimeFlex',
            //             icon: 'pi pi-fw pi-desktop',
            //             url: ['https://www.primefaces.org/primeflex/'],
            //             target: '_blank',
            //         },
            //     ],
            // },
            // {
            //     label: 'Pages',
            //     items: [
            //         {
            //             label: 'Crud',
            //             icon: 'pi pi-fw pi-user-edit',
            //             routerLink: ['/pages/crud'],
            //         },
            //         {
            //             label: 'Timeline',
            //             icon: 'pi pi-fw pi-calendar',
            //             routerLink: ['/pages/timeline'],
            //         },
            //         {
            //             label: 'Landing',
            //             icon: 'pi pi-fw pi-globe',
            //             routerLink: ['pages/landing'],
            //         },
            //         {
            //             label: 'Login',
            //             icon: 'pi pi-fw pi-sign-in',
            //             routerLink: ['pages/login'],
            //         },
            //         {
            //             label: 'Error',
            //             icon: 'pi pi-fw pi-times-circle',
            //             routerLink: ['pages/error'],
            //         },
            //         {
            //             label: 'Not Found',
            //             icon: 'pi pi-fw pi-exclamation-circle',
            //             routerLink: ['pages/notfound'],
            //         },
            //         {
            //             label: 'Access Denied',
            //             icon: 'pi pi-fw pi-lock',
            //             routerLink: ['pages/access'],
            //         },
            //         {
            //             label: 'Empty',
            //             icon: 'pi pi-fw pi-circle',
            //             routerLink: ['/pages/empty'],
            //         },
            //     ],
            // },
            // {
            //     label: 'Hierarchy',
            //     items: [
            //         {
            //             label: 'Submenu 1',
            //             icon: 'pi pi-fw pi-bookmark',
            //             items: [
            //                 {
            //                     label: 'Submenu 1.1',
            //                     icon: 'pi pi-fw pi-bookmark',
            //                     items: [
            //                         {
            //                             label: 'Submenu 1.1.1',
            //                             icon: 'pi pi-fw pi-bookmark',
            //                         },
            //                         {
            //                             label: 'Submenu 1.1.2',
            //                             icon: 'pi pi-fw pi-bookmark',
            //                         },
            //                         {
            //                             label: 'Submenu 1.1.3',
            //                             icon: 'pi pi-fw pi-bookmark',
            //                         },
            //                     ],
            //                 },
            //                 {
            //                     label: 'Submenu 1.2',
            //                     icon: 'pi pi-fw pi-bookmark',
            //                     items: [
            //                         {
            //                             label: 'Submenu 1.2.1',
            //                             icon: 'pi pi-fw pi-bookmark',
            //                         },
            //                     ],
            //                 },
            //             ],
            //         },
            //         {
            //             label: 'Submenu 2',
            //             icon: 'pi pi-fw pi-bookmark',
            //             items: [
            //                 {
            //                     label: 'Submenu 2.1',
            //                     icon: 'pi pi-fw pi-bookmark',
            //                     items: [
            //                         {
            //                             label: 'Submenu 2.1.1',
            //                             icon: 'pi pi-fw pi-bookmark',
            //                         },
            //                         {
            //                             label: 'Submenu 2.1.2',
            //                             icon: 'pi pi-fw pi-bookmark',
            //                         },
            //                     ],
            //                 },
            //                 {
            //                     label: 'Submenu 2.2',
            //                     icon: 'pi pi-fw pi-bookmark',
            //                     items: [
            //                         {
            //                             label: 'Submenu 2.2.1',
            //                             icon: 'pi pi-fw pi-bookmark',
            //                         },
            //                     ],
            //                 },
            //             ],
            //         },
            //     ],
            // },
            // {
            //     label: 'Get Started',
            //     items: [
            //         {
            //             label: 'Documentation',
            //             icon: 'pi pi-fw pi-question',
            //             routerLink: ['/documentation'],
            //         },
            //         {
            //             label: 'View Source',
            //             icon: 'pi pi-fw pi-search',
            //             url: ['https://github.com/primefaces/sakai-ng'],
            //             target: '_blank',
            //         },
            //     ],
            // },
        ];
        console.log(await this.appService.getRoleInfo())
    }
    clickMenu(event: any) {
        console.log(event.target.value);
    }
    onKeydown(event: KeyboardEvent) {
        const nodeElement = <HTMLDivElement>event.target;
        if (event.code === 'Enter' || event.code === 'Space') {
            nodeElement.click();
            console.log('node element ', nodeElement);

            event.preventDefault();
        }
    }
}

// export interface Menu {
//     label: string;
//     items: MenuItem[];
// }

// export interface MenuItem {
//     label: string;
//     icon: string;
//     routerLink: string[];
//     items?: MenuItem2[];
// }

// export interface MenuItem2 {
//     label: string;
//     routerLink: string[];
// }
