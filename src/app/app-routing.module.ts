import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
    {
        path: '',
        loadChildren: () => import('./layout/app-main/app-main.module').then((m) => m.AppMainModule)
    },
    {
        path: 'login',
        loadChildren: () => import('./pages/login/login.module').then((m) => m.LoginModule)
    },
    {
        path: 'logout',
        loadChildren: () => import('./pages/logout/logout.module').then((m) => m.LogoutModule)
    },
    {
        path: 'manage-users',
        loadChildren: () => import('./pages/manage-users/manage-users.module').then((m) => m.ManageUsersModule)
    },
    {
        path: 'manage-doors',
        loadChildren: () => import('./pages/manage-doors/manage-doors.module').then((m) => m.ManageDoorsModule)
    },
    {
        path: '**',
        redirectTo: ''
    },

];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }
