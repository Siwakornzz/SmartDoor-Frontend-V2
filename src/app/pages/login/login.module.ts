import {CommonModule} from '@angular/common';
import {NgModule, OnInit} from '@angular/core';
import {THEM_LISTS} from './../../../services/app.config.service';
import {ShareModule} from './../../share/share/share.module';

import {LoginRoutingModule} from './login-routing.module';
import {LoginComponent} from './login.component';

@NgModule({
    declarations: [LoginComponent],
    imports: [ShareModule, CommonModule, LoginRoutingModule]
})
export class LoginModule {}
