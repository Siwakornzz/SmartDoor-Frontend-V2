import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ManageDoorsRoutingModule } from './manage-doors-routing.module';
import { ManageDoorsComponent } from './manage-doors.component';
import { ShareModule } from 'src/app/share/share/share.module';


@NgModule({
  declarations: [
    ManageDoorsComponent
  ],
  imports: [
    ShareModule,
    CommonModule,
    ManageDoorsRoutingModule
  ]
})
export class ManageDoorsModule { }
