import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ManageUsersRoutingModule } from './manage-users-routing.module';
import { ManageUsersComponent } from './manage-users.component';
import { ShareModule } from 'src/app/share/share/share.module';


@NgModule({
  declarations: [
    ManageUsersComponent
  ],
  imports: [
    ShareModule,
    CommonModule,
    ManageUsersRoutingModule
  ]
})
export class ManageUsersModule { }
