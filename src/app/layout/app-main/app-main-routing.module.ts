import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashBoardComponent } from 'src/app/pages/dash-board/dash-board.component';
import { AuthGuard } from 'src/services/guard/auth.guard';
import { AppMainComponent } from './app-main.component';

const routes: Routes = [
    {
        path: '',
        component: AppMainComponent,
        canActivate: [AuthGuard],
        children: [
            {
                path: '',
                loadChildren: () => import('./../../pages/dash-board/dash-board.module').then((m) => m.DashBoardModule)
            },
            {
                path: 'setting',
                loadChildren: () => import('../../pages/setting/setting.module').then((m) => m.SettingModule)
            },
            {
                path: 'pages/manage-users',
                loadChildren: () => import('../../pages/manage-users/manage-users.module').then((m) => m.ManageUsersModule)
            },
            {
                path: 'pages/manage-doors',
                loadChildren: () => import('../../pages/manage-doors/manage-doors.module').then((m) => m.ManageDoorsModule)
            },
            { path: 'pages/fakeJson', loadChildren: () => import('../../pages/fake-json/fake-json.module').then(m => m.FakeJsonModule) },
            { path: 'pages/product', loadChildren: () => import('../../pages/product/product.module').then(m => m.ProductModule) },

        ]
    },

    // register 
    // {
    //     path: 'register',
    //     loadChildren: () => import('../../pages/register/register.module').then((m) => m.RegisterModule)
    // },

    // login
    {
        path: 'login',
        loadChildren: () => import('../../pages/login/login.module').then((m) => m.LoginModule)
    },
    {
        path: 'logout',
        loadChildren: () => import('../../pages/logout/logout.module').then((m) => m.LogoutModule)
    },
    { path: 'pages/setting', loadChildren: () => import('../../pages/manage-doors/manage-doors.module').then(m => m.ManageDoorsModule) },
    



    // logout
    // {
    //     path: 'logout',
    //     loadChildren: () => import('../../pages/logout/logout.module').then((m) => m.LogoutModule)
    // },

    { path: '**', redirectTo: '' }

];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class AppMainRoutingModule { }
